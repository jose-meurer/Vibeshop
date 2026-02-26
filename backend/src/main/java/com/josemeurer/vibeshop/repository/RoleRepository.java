package com.josemeurer.vibeshop.repository;

import com.josemeurer.vibeshop.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {
    boolean existsByName(String name);
}
