package com.josemeurer.vibeshop.mapper;

import com.josemeurer.vibeshop.dto.CreateUserDTO;
import com.josemeurer.vibeshop.dto.UserDTO;
import com.josemeurer.vibeshop.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(CreateUserDTO dto);
    UserDTO toDTO(User entity);
}
