package ru.project.highload.post.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import ru.project.highload.post.domain.Post;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class PostRepository {

    private final JdbcClient jdbcClient;

    public UUID save(UUID authorId, String text) {
        var query = jdbcClient.sql("""
                        INSERT INTO posts (author_id, text)
                        VALUES (:author, :text)
                        RETURNING id
                        """)
                .param("author", authorId)
                .param("text", text)
                .query(UUID.class);

        return Objects.requireNonNull(query, "Query cannot be null").single();
    }

    public boolean update(UUID postId, UUID authorId, String text) {
        int updatedRows = jdbcClient.sql("""
                        UPDATE posts 
                        SET text = :text,
                            updated_at = NOW()
                        WHERE id = :id AND author_id = :author
                        """)
                .param("id", postId)
                .param("author", authorId)
                .param("text", text)
                .update();

        return updatedRows > 0;
    }

    public boolean delete(UUID postId, UUID authorId) {
        int affectedRows = jdbcClient.sql("""
                        UPDATE posts 
                        SET is_deleted = TRUE,
                            updated_at = NOW()
                        WHERE id = :id AND author_id = :author AND is_deleted = FALSE
                        """)
                .param("id", postId)
                .param("author", authorId)
                .update();
        return affectedRows > 0;
    }

    public Optional<Post> findById(UUID id) {
        return jdbcClient.sql("""
                        SELECT id, author_id, text, created_at, updated_at
                        FROM posts 
                        WHERE id = :id AND is_deleted = FALSE
                        """)
                .param("id", id)
                .query(Post.class)
                .optional();
    }

    public List<Post> findFeeds(UUID userId, BigDecimal offset, BigDecimal limit) {
        return jdbcClient.sql("""
                    SELECT p.id, p.author_id, p.text, p.created_at, p.updated_at
                    FROM posts p
                    INNER JOIN friends f ON p.author_id = f.friend_id
                    WHERE f.user_id = :userId
                      AND f.status = 'accepted'
                      AND p.is_deleted = FALSE
                    ORDER BY p.created_at DESC
                    LIMIT :limit OFFSET :offset
                    """)
                .param("userId", userId)
                .param("offset", offset)
                .param("limit", limit)
                .query(Post.class)
                .list();
    }
}
