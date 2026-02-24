package com.josemeurer.vibeshop.service.impl;

import com.josemeurer.vibeshop.dto.CreateUserDTO;
import com.josemeurer.vibeshop.dto.UserDTO;
import com.josemeurer.vibeshop.entity.Role;
import com.josemeurer.vibeshop.entity.User;
import com.josemeurer.vibeshop.mapper.UserMapper;
import com.josemeurer.vibeshop.repository.RoleRepository;
import com.josemeurer.vibeshop.repository.UserRepository;
import com.josemeurer.vibeshop.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    @Async
    @Override
    public CompletableFuture<UserDTO> createUser(CreateUserDTO dto) {
        if(userRepository.existsByEmail(dto.email()))
            throw new IllegalArgumentException("E-mail já está em uso.");

        var encryptedPassword = passwordEncoder.encode(dto.password());
        var user = userMapper.toEntity(dto);
        user.setPassword(encryptedPassword);

        var roles = roleRepository.findAllById(dto.roles());
        user.setRoles(new HashSet<>(roles));

        var result = userRepository.save(user);
        return CompletableFuture.completedFuture(userMapper.toDTO(result));
    }
}
