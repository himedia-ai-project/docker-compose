package com.example.example.controller;

import com.example.example.entity.Counter;
import com.example.example.service.CounterService;


import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequiredArgsConstructor
@RequestMapping("/api/counter")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class CounterController {
    private final CounterService counterService;

    @GetMapping
    public Counter getCounter() {
        return counterService.getCounter();
    }

    @PostMapping("/increase")
    public Counter increaseCounter() {
        return counterService.updateCounter(1);
    }

    @PostMapping("/decrease")
    public Counter decreaseCounter() {
        return counterService.updateCounter(-1);
    }
}