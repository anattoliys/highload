package ru.project.highload.dialog.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.project.highload.dialog.domain.Message;
import ru.project.highload.dialog.repository.DialogRepository;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DialogService {

    private final DialogRepository dialogRepository;

    public List<Message> findMessages(UUID firstUser, UUID secondUser) {
        return dialogRepository.findAllMessagesBetween(firstUser, secondUser);
    }

    public void sendMessage(UUID from, UUID to, String text) {
        if (text == null || text.isBlank()) {
            throw new IllegalArgumentException("Message text cannot be empty");
        }
        dialogRepository.saveMessage(from, to, text);
    }
}
