package ru.project.highload.post.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import ru.project.highload.openapi.dto.PostCreatePostRequest;
import ru.project.highload.openapi.dto.PostUpdatePutRequest;
import ru.project.highload.post.domain.Post;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "authorId", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Post toEntityCreate(PostCreatePostRequest request);

    @Mapping(target = "authorId", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Post toEntityUpdate(PostUpdatePutRequest request);

    @Mapping(target = "authorUserId", expression = "java(post.getAuthorId().toString())")
    ru.project.highload.openapi.dto.Post toDto(Post post);

    List<ru.project.highload.openapi.dto.Post> toDtoList(List<Post> post);
}
