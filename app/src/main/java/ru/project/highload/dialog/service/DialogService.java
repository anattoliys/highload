package ru.project.highload.dialog.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.project.highload.dialog.client.DialogClient;
import ru.project.highload.dialog.domain.Message;

import java.util.List;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class DialogService {

    private final DialogClient dialogClient;

    public List<Message> findDialog(UUID targetUser) {
        return dialogClient.findDialogMessages(targetUser);
    }

    public void sendMessage(UUID to, String text) {
        if (text == null || text.isBlank()) {
            throw new IllegalArgumentException("Message text cannot be empty");
        }
        dialogClient.sendMessage(to, text);
    }
}
