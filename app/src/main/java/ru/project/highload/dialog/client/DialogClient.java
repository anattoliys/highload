package ru.project.highload.dialog.client;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;
import ru.project.highload.dialog.domain.Message;
import ru.project.highload.utils.SecurityUtils;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Component
public class DialogClient {

    private final RestClient restClient;

    public DialogClient(
            RestClient.Builder builder,
            @Value("${services.dialog.url}") String baseUrl
    ) {
        this.restClient = builder.baseUrl(baseUrl).build();
    }

    public List<Message> findDialogMessages(UUID targetUser) {
        log.info("Get dialog messages with tracing");
        return restClient.get()
                .uri("/dialog/{user_id}/list", targetUser)
                .header("Authorization", SecurityUtils.getAuthHeader())
                .retrieve()
                .body(new ParameterizedTypeReference<>() {
                });
    }

    public void sendMessage(UUID to, String text) {
        log.info("Send message with tracing");
        restClient.post()
                .uri("/dialog/{user_id}/send", to)
                .header("Authorization", SecurityUtils.getAuthHeader())
                .body(Map.of("text", text))
                .retrieve()
                .toBodilessEntity();
    }
}
