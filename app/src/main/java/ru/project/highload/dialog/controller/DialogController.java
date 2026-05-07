package ru.project.highload.dialog.controller;

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
    public ResponseEntity<List<DialogMessage>> dialogUserIdListGet(String userId) {
        List<Message> messages = service.findDialog(UUID.fromString(userId));
        return ResponseEntity.ok(mapper.toDto(messages));
    }

    @Override
    public ResponseEntity<Void> dialogUserIdSendPost(String userId, DialogUserIdSendPostRequest dialogUserIdSendPostRequest) {
        service.sendMessage(UUID.fromString(userId), dialogUserIdSendPostRequest.getText());
        return ResponseEntity.ok().build();
    }
}
