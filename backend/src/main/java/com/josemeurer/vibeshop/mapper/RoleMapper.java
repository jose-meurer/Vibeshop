package com.josemeurer.vibeshop.mapper;

import com.josemeurer.vibeshop.dto.CreateRoleDTO;
import com.josemeurer.vibeshop.dto.RoleDTO;
import com.josemeurer.vibeshop.entity.Role;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RoleMapper {

    Role toEntity(CreateRoleDTO dto);
    RoleDTO toDTO(Role entity);
}
