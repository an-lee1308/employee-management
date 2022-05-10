package com.example.demo.repository;

import com.example.demo.model.WorkingModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



    @Repository
    public interface WorkingRepository extends JpaRepository<WorkingModel,Integer> {
}
