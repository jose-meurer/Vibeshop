package com.josemeurer.vibeshop.service;

import com.josemeurer.vibeshop.dto.CreateRoleDTO;
import com.josemeurer.vibeshop.dto.RoleDTO;

import java.util.List;

public interface RoleService {
    RoleDTO createRole(CreateRoleDTO dto);
    List<RoleDTO> findAll();
}
