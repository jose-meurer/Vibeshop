package com.josemeurer.vibeshop.service;

import com.josemeurer.vibeshop.dto.CreateUserDTO;
import com.josemeurer.vibeshop.dto.UserDTO;

public interface UserService {

    UserDTO createUser(CreateUserDTO dto);
}
