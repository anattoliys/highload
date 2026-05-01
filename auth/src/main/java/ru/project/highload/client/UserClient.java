package ru.project.highload.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;
import org.springframework.web.server.ResponseStatusException;
import ru.project.highload.domain.User;

import java.util.UUID;

@Component
public class UserClient {

    private final RestClient restClient;

    public UserClient(@Value("${services.app.url}") String baseUrl) {
        this.restClient = RestClient.builder()
                .baseUrl(baseUrl)
                .build();
    }

    public User findById(UUID id) {
        return restClient.get()
                .uri("/internal/users/{id}", id)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (request, response) -> {
                    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found");
                })
                .body(User.class);
    }
}
