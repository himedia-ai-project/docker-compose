package com.example.docker_compose.service;

import com.example.docker_compose.model.Counter;
import com.example.docker_compose.repository.CounterRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CounterService {
    private final CounterRepository counterRepository;

    public CounterService(CounterRepository counterRepository) {
        this.counterRepository = counterRepository;
    }

    @PostConstruct
    public void init() {
        counterRepository.findById(1L).orElseGet(() -> {
            Counter counter = new Counter();
            counter.setCount(0);
            return counterRepository.save(counter);
        });
    }

    public Counter getCounter() {
        return counterRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("Counter not found"));
    }

    @Transactional
    public Counter increment() {
        Counter counter = getCounter();
        counter.setCount(counter.getCount() + 1);
        return counterRepository.save(counter);
    }
}
