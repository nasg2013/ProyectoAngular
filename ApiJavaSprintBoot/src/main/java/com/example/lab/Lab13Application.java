package com.example.lab;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication @ComponentScan({ "com.example.controller","com.example.repository", "com.example.service" } )
@EnableJpaRepositories("com.example.repository")

public class Lab13Application {

    public static void main(String[] args) {
        SpringApplication.run(Lab13Application.class, args);
    }

    @GetMapping("/greet")
    public String greet(@RequestParam(value = "myName", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

}
