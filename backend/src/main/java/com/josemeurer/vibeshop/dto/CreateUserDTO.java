package com.josemeurer.vibeshop.dto;

public record CreateUserDTO(String name,
        String surname,
        String email,
        String password
) {
}
