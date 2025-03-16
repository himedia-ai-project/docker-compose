package com.example.dockercompose.service;

import com.example.dockercompose.entity.Counter;
import com.example.dockercompose.repository.CounterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class CounterService {
    private final CounterRepository counterRepository;

    public Integer count() {
        if (counterRepository.count() == 0) {
            Counter counter = new Counter();
            counter.setCountValue(0);
            counterRepository.save(counter);
            return 0;
        }
        return counterRepository.findById(1).get().getCountValue();
    }

    public Integer increment() {
        if (counterRepository.count() == 0) {
            Counter counter = new Counter();
            counter.setCountValue(1);
            counterRepository.save(counter);
            return 1;
        }
        Counter counter = counterRepository.findById(1).get();
        counter.setCountValue(counter.getCountValue() + 1);
        Counter save = counterRepository.save(counter);
        return save.getCountValue();
    }

    public Integer decrement() {
        if (counterRepository.count() == 0) {
            Counter counter = new Counter();
            counter.setCountValue(-1);
            counterRepository.save(counter);
            return -1;
        }
        Counter counter = counterRepository.findById(1).get();
        counter.setCountValue(counter.getCountValue() - 1);
        Counter save = counterRepository.save(counter);
        return save.getCountValue();
    }
}
