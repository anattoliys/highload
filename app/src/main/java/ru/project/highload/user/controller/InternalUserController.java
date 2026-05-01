package ru.project.highload.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.user.domain.UserAuthDto;
import ru.project.highload.user.mapper.UserMapper;
import ru.project.highload.user.service.UserService;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class InternalUserController {

    private final UserMapper mapper;
    private final UserService service;

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/internal/users/{id}",
            produces = {"application/json"}
    )
    public ResponseEntity<UserAuthDto> getUserForAuth(@PathVariable(name = "id") UUID id) {
        return ResponseEntity.ok(mapper.mapToAuthUser(service.findById(id)));
    }
}
