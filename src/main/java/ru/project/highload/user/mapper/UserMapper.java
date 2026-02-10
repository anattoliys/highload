package ru.project.highload.user.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import ru.project.highload.openapi.dto.UserRegisterPost200Response;
import ru.project.highload.openapi.dto.UserRegisterPostRequest;
import ru.project.highload.user.domain.User;

import java.util.List;
import java.util.UUID;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    User toEntity(UserRegisterPostRequest userRequest);

    UserRegisterPost200Response userIdToDto(UUID userId);

    ru.project.highload.openapi.dto.User toDto(User user);

    List<ru.project.highload.openapi.dto.User> toListDto(List<User> user);
}
