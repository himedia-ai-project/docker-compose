package com.example.dockercompose.controller;

import com.example.dockercompose.service.CounterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/api")
@RestController
public class CounterController {
    private final CounterService counterService;

    @GetMapping("/count")
    public ResponseEntity<Integer> count() {
        Integer count = counterService.count();
        return ResponseEntity.ok().body(count);
    }

    @PostMapping("/increment")
    public ResponseEntity<Integer> increment() {
        Integer count = counterService.increment();
        return ResponseEntity.ok(count);
    }

    @PostMapping("/decrement")
    public ResponseEntity<Integer> decrement() {
        Integer count = counterService.decrement();
        return ResponseEntity.ok(count);
    }
}
