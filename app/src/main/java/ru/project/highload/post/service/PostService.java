package ru.project.highload.post.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.project.highload.post.domain.Post;
import ru.project.highload.post.domain.PostEvent;
import ru.project.highload.post.repository.PostRepository;
import ru.project.highload.utils.JsonUtils;

import java.math.BigDecimal;
import java.time.Duration;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

    private final JsonUtils jsonUtils;
    private final PostRepository repository;
    private final StringRedisTemplate redisTemplate;
    private final RabbitTemplate rabbitTemplate;

    public UUID create(UUID authorId, Post post) {
        if (post.getText() == null || post.getText().isBlank()) {
            throw new RuntimeException("Text can not be empty");
        }
        var postId = repository.save(authorId, post.getText());
        Post dbPost = getById(postId);

        redisTemplate.opsForValue().set("post:" + postId, jsonUtils.serialize(dbPost), Duration.ofDays(7));

        PostEvent event = new PostEvent(
                postId.toString(),
                post.getText(),
                authorId.toString()
        );

        List<UUID> friendIds = repository.findAcceptedFriendIds(authorId);
        for (UUID friendId : friendIds) {
            String feedKey = "feed:" + friendId;
            if (Boolean.TRUE.equals(redisTemplate.hasKey(feedKey))) {
                redisTemplate.opsForList().leftPush(feedKey, postId.toString());
                redisTemplate.opsForList().trim(feedKey, 0, 999);
            }

            String routingKey = "post.feed.posted." + friendId;
//            rabbitTemplate.convertAndSend(RabbitConfig.POST_EXCHANGE, routingKey, event);
        }

        return postId;
    }

    public void update(UUID authorId, Post post) {
        boolean updated = repository.update(post.getId(), authorId, post.getText());
        if (!updated) {
            throw new EntityNotFoundException("Post not found or access denied");
        }

        Post updatedPost = getById(post.getId());
        redisTemplate.opsForValue().set("post:" + post.getId(), jsonUtils.serialize(updatedPost), Duration.ofDays(7));
    }

    public void delete(UUID authorId, UUID id) {
        boolean deleted = repository.delete(id, authorId);
        if (!deleted) {
            throw new EntityNotFoundException("Post not found or access denied");
        }

        redisTemplate.delete("post:" + id);
    }

    @Transactional(readOnly = true)
    public Post getById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Post not found"));
    }

    @Transactional(readOnly = true)
    public List<Post> getFeeds(UUID userId, BigDecimal offset, BigDecimal limit) {
        String feedKey = "feed:" + userId;
        int start = offset.intValue();
        int end = start + limit.intValue() - 1;
        List<String> cachePostIds = redisTemplate.opsForList().range(feedKey, start, end);

        if (cachePostIds == null || cachePostIds.isEmpty()) {
            List<Post> dbPosts = repository.findFeeds(userId, BigDecimal.ZERO, BigDecimal.valueOf(1000));
            if (dbPosts.isEmpty()) {
                return List.of();
            }

            savePostsToCache(feedKey, dbPosts);

            return dbPosts.stream()
                    .skip(start)
                    .limit(limit.longValue())
                    .toList();
        }

        List<String> postKeys = cachePostIds.stream().map(id -> "post:" + id).toList();
        List<String> postJsons = redisTemplate.opsForValue().multiGet(postKeys);

        if (postJsons == null) {
            return List.of();
        }

        return postJsons.stream()
                .filter(Objects::nonNull)
                .map(json -> jsonUtils.deserialize(json, Post.class))
                .filter(Objects::nonNull)
                .toList();
    }

    public void rebuildUserFeed(UUID userId) {
        String feedKey = "feed:" + userId;

        redisTemplate.delete(feedKey);
        List<Post> posts = repository.findFeeds(userId, BigDecimal.ZERO, BigDecimal.valueOf(1000));

        if (!posts.isEmpty()) {
            savePostsToCache(feedKey, posts);
        }
    }

    private void savePostsToCache(String feedKey, List<Post> posts) {
        List<String> postIds = new ArrayList<>();
        Map<String, String> postsData = new HashMap<>();

        for (Post post : posts) {
            String json = jsonUtils.serialize(post);
            if (json != null) {
                postIds.add(post.getId().toString());
                postsData.put("post:" + post.getId(), json);
            }
        }

        redisTemplate.opsForValue().multiSet(postsData);
        redisTemplate.delete(feedKey);

        if (!postIds.isEmpty()) {
            redisTemplate.opsForList().rightPushAll(feedKey, postIds);
            redisTemplate.expire(feedKey, Duration.ofHours(24));
        }
    }
}
