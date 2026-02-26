package com.josemeurer.vibeshop.service.impl;

import com.josemeurer.vibeshop.dto.CreateRoleDTO;
import com.josemeurer.vibeshop.dto.RoleDTO;
import com.josemeurer.vibeshop.mapper.RoleMapper;
import com.josemeurer.vibeshop.repository.RoleRepository;
import com.josemeurer.vibeshop.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;
    private final RoleMapper roleMapper;

    @Override
    @Transactional
    public RoleDTO createRole(CreateRoleDTO dto) {
        var roleName = dto.name().toUpperCase();
        if (roleRepository.existsByName(roleName)) {
            throw new IllegalArgumentException("Role já cadastrada.");
        }
        
        var role = roleMapper.toEntity(dto);
        role.setName(roleName);
        
        var savedRole = roleRepository.save(role);
        return roleMapper.toDTO(savedRole);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RoleDTO> findAll() {
        return roleRepository.findAll().stream()
                .map(roleMapper::toDTO)
                .toList();
    }
}
