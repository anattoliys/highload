package ru.project.highload.controller;

import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.domain.CounterResponseDto;
import ru.project.highload.service.CounterService;

@RestController
@RequestMapping("/counters")
@RequiredArgsConstructor
@Validated
public class CounterController {

    private final CounterService counterService;

    @GetMapping("/unread/{userId}")
    public ResponseEntity<CounterResponseDto> getUnreadCount(@PathVariable @NotBlank(message = "User ID cannot be blank") String userId) {

        long unreadCount = counterService.getUnreadCount(userId);
        return ResponseEntity.ok(new CounterResponseDto(userId, unreadCount));
    }
}
