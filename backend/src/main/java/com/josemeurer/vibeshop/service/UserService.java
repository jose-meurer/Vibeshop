package com.josemeurer.vibeshop.service;

import com.josemeurer.vibeshop.dto.CreateUserDTO;
import com.josemeurer.vibeshop.dto.UserDTO;

import java.util.concurrent.CompletableFuture;

public interface UserService {

    CompletableFuture<UserDTO> createUser(CreateUserDTO dto);
}
