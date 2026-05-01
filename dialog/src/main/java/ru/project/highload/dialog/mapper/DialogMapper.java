package ru.project.highload.dialog.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import ru.project.highload.dialog.domain.Message;
import ru.project.highload.openapi.dto.DialogMessage;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DialogMapper {

    @Mapping(target = "from", source = "senderId")
    @Mapping(target = "to", source = "recipientId")
    @Mapping(target = "text", source = "messageText")
    DialogMessage toDto(Message messages);

    List<DialogMessage> toDto(List<Message> messages);
}
