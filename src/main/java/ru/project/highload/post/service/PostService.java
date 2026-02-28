package ru.project.highload.post.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.project.highload.post.domain.Post;
import ru.project.highload.post.repository.PostRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository repository;

    public UUID create(UUID authorId, Post post) {
        if (post.getText() == null || post.getText().isBlank()) {
            throw new RuntimeException("Text can not be empty");
        }
        return repository.save(authorId, post.getText());
    }

    public void update(UUID authorId, Post post) {
        boolean updated = repository.update(post.getId(), authorId, post.getText());
        if (!updated) {
            throw new EntityNotFoundException("Post not found or access denied");
        }
    }

    public void delete(UUID authorId, UUID id) {
        boolean deleted = repository.delete(id, authorId);
        if (!deleted) {
            throw new EntityNotFoundException("Post not found or access denied");
        }
    }

    public Post getById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Post not found"));
    }

    public List<Post> getFeeds(UUID userId, BigDecimal offset, BigDecimal limit) {
        return repository.findFeeds(userId, offset, limit);
    }
}
