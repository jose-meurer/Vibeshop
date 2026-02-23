package com.josemeurer.vibeshop.dto;

import java.util.Set;

public record CreateUserDTO(
        String name,
        String surname,
        String email,
        String password,
        Set<String> roles
) {
}
