package com.josemeurer.vibeshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserRepository, UUID> {
}
