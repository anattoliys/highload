package ru.project.highload.utils;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@RequiredArgsConstructor
public class JsonUtils {

    private final ObjectMapper objectMapper;

    public <T> String serialize(T object) {
        try {
            return objectMapper.writeValueAsString(object);
        } catch (Exception e) {
            throw new RuntimeException("Mapping error", e);
        }
    }

    public <T> T deserialize(String json, Class<T> clazz) {
        if (json == null || json.isBlank()) {
            return null;
        }
        try {
            return objectMapper.readValue(json, clazz);
        } catch (Exception e) {
            throw new RuntimeException("Mapping error", e);
        }
    }

    public <T> T deserialize(String json, TypeReference<T> typeReference) {
        if (json == null || json.isBlank()) {
            return null;
        }
        if (json.trim().equals("{}")) {
            if (typeReference.getType().getTypeName().contains("List") ||
                    typeReference.getType().getTypeName().contains("ArrayList")) {
                return (T) new ArrayList<>();
            }
        }
        try {
            return objectMapper.readValue(json, typeReference);
        } catch (Exception e) {
            throw new RuntimeException("Mapping error", e);
        }
    }
}
