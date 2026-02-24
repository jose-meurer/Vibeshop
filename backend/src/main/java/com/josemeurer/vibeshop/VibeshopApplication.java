package com.josemeurer.vibeshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class VibeshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(VibeshopApplication.class, args);
	}

}
