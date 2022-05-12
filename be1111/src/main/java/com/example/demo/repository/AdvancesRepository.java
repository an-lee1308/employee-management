package com.example.demo.repository;

import com.example.demo.model.Advances;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvancesRepository extends JpaRepository<Advances, Integer> {
}
