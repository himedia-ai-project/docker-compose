package com.example.docker_compose.controller;

import com.example.docker_compose.service.CounterService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CounterController {
    private final CounterService counterService;

    public CounterController(CounterService counterService) {
        this.counterService = counterService;
    }

    @GetMapping("/")
    public String getCount(Model model) {
        model.addAttribute("count", counterService.getCounter().getCount());
        return "index";
    }

    @PostMapping("/increment")
    public String increment() {
        counterService.increment();
        return "redirect:/";
    }
}
