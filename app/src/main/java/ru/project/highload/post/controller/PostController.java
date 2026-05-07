package ru.project.highload.post.controller;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.openapi.api.PostApi;
import ru.project.highload.openapi.dto.Post;
import ru.project.highload.openapi.dto.PostCreatePostRequest;
import ru.project.highload.openapi.dto.PostUpdatePutRequest;
import ru.project.highload.post.mapper.PostMapper;
import ru.project.highload.post.service.PostService;
import ru.project.highload.utils.SecurityUtils;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class PostController implements PostApi {

    private final PostMapper mapper;
    private final PostService service;

    @Override
    public ResponseEntity<String> postCreatePost(PostCreatePostRequest postCreatePostRequest) {
        return ResponseEntity.ok(service.create(SecurityUtils.getCurrentUserId(), mapper.toEntityCreate(postCreatePostRequest)).toString());
    }

    @Override
    public ResponseEntity<Void> postUpdatePut(PostUpdatePutRequest postUpdatePutRequest) {
        service.update(SecurityUtils.getCurrentUserId(), mapper.toEntityUpdate(postUpdatePutRequest));
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Void> postDeleteIdPut(String id) {
        service.delete(SecurityUtils.getCurrentUserId(), UUID.fromString(id));
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Post> postGetIdGet(String id) {
        return ResponseEntity.ok(mapper.toDto(service.getById(UUID.fromString(id))));
    }

    @Override
    public ResponseEntity<List<Post>> postFeedGet(BigDecimal offset, BigDecimal limit) {
        return ResponseEntity.ok(mapper.toDtoList(service.getFeeds(SecurityUtils.getCurrentUserId(), offset, limit)));
    }

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/post/rebuild",
            produces = {"application/json"}
    )
    public ResponseEntity<Void> rebuildUserFeed(@Parameter(name = "userId", in = ParameterIn.QUERY) UUID userId) {
        service.rebuildUserFeed(userId);
        return ResponseEntity.ok().build();
    }
}
