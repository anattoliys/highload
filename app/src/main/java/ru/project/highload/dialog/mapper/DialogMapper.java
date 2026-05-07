package ru.project.highload.dialog.mapper;

import org.mapstruct.Mapper;
import ru.project.highload.dialog.domain.Message;
import ru.project.highload.openapi.dto.DialogMessage;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DialogMapper {

    DialogMessage toDto(Message messages);

    List<DialogMessage> toDto(List<Message> messages);
}
