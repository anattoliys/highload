package ru.project.highload.user.mapper;

import org.mapstruct.Mapper;
import ru.project.highload.openapi.dto.LoginPost200Response;
import ru.project.highload.openapi.dto.LoginPostRequest;
import ru.project.highload.user.domain.LoginRequest;
import ru.project.highload.user.domain.LoginResponse;

@Mapper(componentModel = "spring")
public interface AuthMapper {

    LoginRequest toEntity(LoginPostRequest request);

    LoginPost200Response toDto(LoginResponse request);
}
