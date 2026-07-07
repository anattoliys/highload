package ru.project.highload.dialog.controller;

import io.micrometer.core.annotation.Timed;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.dialog.domain.Message;
import ru.project.highload.dialog.mapper.DialogMapper;
import ru.project.highload.dialog.service.DialogService;
import ru.project.highload.openapi.api.DialogApi;
import ru.project.highload.openapi.dto.DialogMessage;
import ru.project.highload.openapi.dto.DialogUserIdSendPostRequest;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class DialogController implements DialogApi {

    private final DialogMapper mapper;
    private final DialogService service;

    @Override
    @Timed(value = "app_dialog_requests", description = "RED metrics for get dialog messages", histogram = true, percentiles = {0.5, 0.9, 0.95, 0.99})
    public ResponseEntity<List<DialogMessage>> dialogUserIdListGet(String userId) {
        List<Message> messages = service.findDialog(UUID.fromString(userId));
        return ResponseEntity.ok(mapper.toDto(messages));
    }

    @Override
    @Timed(value = "app_dialog_requests", description = "RED metrics for send dialog messages", histogram = true, percentiles = {0.5, 0.9, 0.95, 0.99})
    public ResponseEntity<Void> dialogUserIdSendPost(String userId, DialogUserIdSendPostRequest dialogUserIdSendPostRequest) {
        service.sendMessage(UUID.fromString(userId), dialogUserIdSendPostRequest.getText());
        return ResponseEntity.ok().build();
    }
}
