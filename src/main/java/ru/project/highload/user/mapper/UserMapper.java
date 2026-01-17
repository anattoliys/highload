package ru.project.highload.user.mapper;

import org.mapstruct.Mapper;
import ru.project.highload.openapi.dto.UserRegisterPost200Response;
import ru.project.highload.openapi.dto.UserRegisterPostRequest;
import ru.project.highload.user.domain.User;

import java.util.UUID;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(UserRegisterPostRequest userRequest);

    UserRegisterPost200Response userIdToDto(UUID userId);
}
