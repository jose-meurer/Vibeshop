package com.josemeurer.vibeshop.dto;

import java.util.Set;

public record UserDTO(
        String name,
        String surname,
        String email,
        Set<String> roles
) {
}
