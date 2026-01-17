package ru.project.highload.user.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import ru.project.highload.user.domain.User;

import java.util.Objects;
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
                .param("sex", user.getSex())
                .param("bio", user.getBiography())
                .param("city", user.getCity())
                .param("pass", encodedPassword)
                .query(UUID.class);

        return Objects.requireNonNull(query, "Query cannot be null").single();
    }
}
