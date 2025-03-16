package com.example.dockercompose.repository;

import com.example.dockercompose.entity.Counter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CounterRepository extends JpaRepository<Counter, Integer> {
}
