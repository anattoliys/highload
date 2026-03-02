package ru.project.highload.post.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import ru.project.highload.post.domain.Post;
import ru.project.highload.post.repository.PostRepository;

import java.math.BigDecimal;
import java.time.Duration;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository repository;
    private final StringRedisTemplate redisTemplate;
    private final ObjectMapper objectMapper;

    public UUID create(UUID authorId, Post post) {
        if (post.getText() == null || post.getText().isBlank()) {
            throw new RuntimeException("Text can not be empty");
        }
        var postId = repository.save(authorId, post.getText());
        Post dbPost = getById(postId);

        redisTemplate.opsForValue().set("post:" + postId, serialize(dbPost), Duration.ofDays(7));

        List<UUID> friendIds = repository.findAcceptedFriendIds(authorId);
        for (UUID friendId : friendIds) {
            String feedKey = "feed:" + friendId;
            if (Boolean.TRUE.equals(redisTemplate.hasKey(feedKey))) {
                redisTemplate.opsForList().leftPush(feedKey, postId.toString());
                redisTemplate.opsForList().trim(feedKey, 0, 999);
            }
        }
        return postId;
    }

    public void update(UUID authorId, Post post) {
        boolean updated = repository.update(post.getId(), authorId, post.getText());
        if (!updated) {
            throw new EntityNotFoundException("Post not found or access denied");
        }

        Post updatedPost = getById(post.getId());
        redisTemplate.opsForValue().set("post:" + post.getId(), serialize(updatedPost), Duration.ofDays(7));
    }

    public void delete(UUID authorId, UUID id) {
        boolean deleted = repository.delete(id, authorId);
        if (!deleted) {
            throw new EntityNotFoundException("Post not found or access denied");
        }

        redisTemplate.delete("post:" + id);
    }

    public Post getById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Post not found"));
    }

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
                .map(this::deserialize)
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
            String json = serialize(post);
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

    private String serialize(Post post) {
        try {
            return objectMapper.writeValueAsString(post);
        } catch (Exception e) {
            return null;
        }
    }

    private Post deserialize(String json) {
        try {
            return objectMapper.readValue(json, Post.class);
        } catch (Exception e) {
            return null;
        }
    }
}
