package com.josemeurer.vibeshop.controller;

import com.josemeurer.vibeshop.dto.LoginRequestDTO;
import com.josemeurer.vibeshop.dto.TokenResponseDTO;
import com.josemeurer.vibeshop.entity.User;
import com.josemeurer.vibeshop.mapper.UserMapper;
import com.josemeurer.vibeshop.service.impl.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;
    private final UserMapper userMapper;

    @PostMapping("/login")
    public ResponseEntity<TokenResponseDTO> login(@RequestBody LoginRequestDTO request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );

        var user = (User) authentication.getPrincipal();
        var jwtToken = tokenService.generateToken(user);
        
        var userDTO = userMapper.toDTO(user);

        return ResponseEntity.ok(new TokenResponseDTO(jwtToken, userDTO));
    }
}
