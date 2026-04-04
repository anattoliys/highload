package ru.project.highload.post.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PostEvent(
        @JsonProperty("postId") String postId,
        @JsonProperty("postText") String postText,
        @JsonProperty("author_user_id") String authorUserId
) {
}
