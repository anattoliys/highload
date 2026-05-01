package ru.project.highload.dialog.service;

import io.tarantool.driver.api.TarantoolClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.project.highload.dialog.domain.Message;
import ru.project.highload.dialog.repository.DialogRepository;

import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Service
public class DialogService {

    private final TarantoolClient tarantoolClient;
    private final DialogRepository dialogRepository;

    public List<Message> findDialog(UUID currentUser, UUID targetUser) {
        log.info("Getting dialog messages with tracing");

        UUID dialogId = generateDialogId(currentUser, targetUser);

        // old logic
//        return dialogRepository.findAllByDialogId(currentUser, dialogId);

        List<Message> allMessages = new ArrayList<>();
        int pageSize = 4000;
        int offset = 0;

        while (true) {
            List<?> page = tarantoolClient.call("get_messages_page",
                    List.of(dialogId.toString(), offset, pageSize)).join();
            if (page == null || page.isEmpty()) {
                break;
            }

            List<List<?>> messagesChunk = (List<List<?>>) page.get(0);
            if (messagesChunk.isEmpty()) {
                break;
            }

            allMessages.addAll(messagesChunk.stream().map(this::mapToMessage).toList());
            offset += pageSize;
        }

        allMessages.sort((a, b) -> {
            boolean aUnread = a.getRecipientId().equals(currentUser) && !a.getIsRead();
            boolean bUnread = b.getRecipientId().equals(currentUser) && !b.getIsRead();
            if (aUnread != bUnread) return aUnread ? -1 : 1;
            return b.getCreatedAt().compareTo(a.getCreatedAt());
        });

        return allMessages;
    }

    public void sendMessage(UUID from, UUID to, String text) {
        log.info("Send message with tracing");

        if (text == null || text.isBlank()) {
            throw new IllegalArgumentException("Message text cannot be empty");
        }
        UUID messageId = UUID.randomUUID();
        UUID dialogId = generateDialogId(from, to);

        // old logic
//        dialogRepository.saveMessage(from, to, text, dialogId);

        tarantoolClient.call("save_message", List.of(
                messageId.toString(),
                dialogId.toString(),
                from.toString(),
                to.toString(),
                text
        )).join();
    }

    //    @Transactional(readOnly = true)
    public void migrateToTarantool() {
        log.info("Starting migration to Tarantool");

//        List<Message> allMessages = dialogRepository.findAll();
//        if (allMessages.isEmpty()) {
//            return;
//        }
//
//        int batchSize = 1000;
//
//        IntStream.range(0, (allMessages.size() + batchSize - 1) / batchSize)
//                .mapToObj(i -> allMessages.subList(i * batchSize, Math.min((i + 1) * batchSize, allMessages.size())))
//                .forEach(batch -> {
//                    try {
//                        List<List<Object>> tupleBatch = batch.stream()
//                                .map(msg -> List.<Object>of(
//                                        msg.getId().toString(),
//                                        msg.getDialogId().toString(),
//                                        msg.getSenderId().toString(),
//                                        msg.getRecipientId().toString(),
//                                        msg.getMessageText(),
//                                        msg.getIsRead(),
//                                        msg.getCreatedAt().toString(),
//                                        msg.getUpdatedAt() != null ? msg.getUpdatedAt().toString() : ""
//                                ))
//                                .toList();
//
//                        tarantoolClient.call("insert_messages_batch", List.of(tupleBatch)).join();
//                    } catch (Exception e) {
//                        log.error("Failed to migrate batch: {}", e.getMessage());
//                    }
//                });
        log.info("Finish migration to Tarantool");
    }

    private UUID generateDialogId(UUID u1, UUID u2) {
        String pair = u1.compareTo(u2) < 0 ? u1.toString() + u2.toString() : u2.toString() + u1.toString();
        return UUID.nameUUIDFromBytes(pair.getBytes(StandardCharsets.UTF_8));
    }

    private Message mapToMessage(List<?> tuple) {
        Message.MessageBuilder builder = Message.builder()
                .id(UUID.fromString((String) tuple.get(0)))
                .dialogId(UUID.fromString((String) tuple.get(1)))
                .senderId(UUID.fromString((String) tuple.get(2)))
                .recipientId(UUID.fromString((String) tuple.get(3)))
                .messageText((String) tuple.get(4))
                .isRead((Boolean) tuple.get(5))
                .createdAt(Instant.parse((String) tuple.get(6)));

        if (tuple.size() > 7 && tuple.get(7) != null) {
            String updatedStr = tuple.get(7).toString();
            if (!updatedStr.isBlank()) {
                builder.updatedAt(Instant.parse(updatedStr));
            }
        }

        return builder.build();
    }
}
