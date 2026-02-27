package com.josemeurer.vibeshop.mapper;

import com.josemeurer.vibeshop.dto.CreateUserDTO;
import com.josemeurer.vibeshop.dto.UserDTO;
import com.josemeurer.vibeshop.entity.Role;
import com.josemeurer.vibeshop.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(CreateUserDTO entity);

    @Mapping(target = "roles", expression = "java(mapRoles(entity.getRoles()))")
    UserDTO toDTO(User entity);

    default Set<String> mapRoles(Set<Role> roles) {
        if (roles == null) return null;
        return roles.stream()
                .map(Role::getName)
                .collect(Collectors.toSet());
    }
}
