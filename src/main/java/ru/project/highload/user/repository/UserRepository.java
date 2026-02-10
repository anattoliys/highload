package ru.project.highload.user.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import ru.project.highload.user.domain.Sex;
import ru.project.highload.user.domain.User;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final JdbcClient jdbcClient;
    private final PasswordEncoder passwordEncoder;

    public UUID save(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());

        var query = jdbcClient.sql("""
                        INSERT INTO users (first_name, second_name, birthdate, sex, biography, city, password)
                        VALUES (:first, :last, :birth, :sex, :bio, :city, :pass)
                        RETURNING id
                        """)
                .param("first", user.getFirstName())
                .param("last", user.getSecondName())
                .param("birth", user.getBirthdate())
                .param("sex", Sex.fromValue(user.getSex()))
                .param("bio", user.getBiography())
                .param("city", user.getCity())
                .param("pass", encodedPassword)
                .query(UUID.class);

        return Objects.requireNonNull(query, "Query cannot be null").single();
    }

    public Optional<User> findById(UUID id) {
        var query = jdbcClient.sql("""
                        SELECT id, first_name, second_name, birthdate, sex, biography, city, password, created_at, updated_at
                        FROM users
                        WHERE id = :id
                        """)
                .param("id", id)
                .query(User.class);

        return Objects.requireNonNull(query, "Query cannot be null").optional();
    }

    public List<User> searchUsers(String firstName, String lastName) {
        var query = jdbcClient.sql("""
                        SELECT id, first_name, second_name, birthdate, sex, biography, city, password, created_at, updated_at
                        FROM users
                        WHERE LOWER(first_name) LIKE :first AND LOWER(second_name) LIKE :last
                        ORDER BY id ASC
                        """)
                .param("first", firstName.toLowerCase() + "%")
                .param("last", lastName.toLowerCase() + "%")
                .query(User.class);

        return Objects.requireNonNull(query, "Query specification cannot be null").list();
    }
}
