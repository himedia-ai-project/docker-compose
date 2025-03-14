package com.example.example.service;

import com.example.example.entity.Counter;
import com.example.example.repository.CounterRepository;

import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CounterService {
    private final CounterRepository counterRepository;

    @PostConstruct
    public void init() {
        if (counterRepository.count() == 0) {
            Counter counter = new Counter();
            counter.setValue(0);
            counterRepository.save(counter);
        }
    }

    @Transactional
    public Counter getCounter() {
        return counterRepository.findAll().stream().findFirst().orElseThrow();
    }

    @Transactional
    public Counter updateCounter(int change) {
        Counter counter = getCounter();
        counter.setValue(counter.getValue() + change);
        return counterRepository.save(counter);
    }
}