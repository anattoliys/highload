package ru.project.highload.dialog.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.project.highload.dialog.domain.Message;
import ru.project.highload.dialog.repository.DialogRepository;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DialogService {

    private final DialogRepository dialogRepository;

    public List<Message> findDialog(UUID currentUser, UUID targetUser) {
        UUID dialogId = generateDialogId(currentUser, targetUser);
        return dialogRepository.findAllByDialogId(currentUser, dialogId);
    }

    public void sendMessage(UUID from, UUID to, String text) {
        if (text == null || text.isBlank()) {
            throw new IllegalArgumentException("Message text cannot be empty");
        }
        UUID dialogId = generateDialogId(from, to);
        dialogRepository.saveMessage(from, to, text, dialogId);
    }

    private UUID generateDialogId(UUID u1, UUID u2) {
        String pair = u1.compareTo(u2) < 0 ? u1.toString() + u2.toString() : u2.toString() + u1.toString();
        return UUID.nameUUIDFromBytes(pair.getBytes(StandardCharsets.UTF_8));
    }
}
