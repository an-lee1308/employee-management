package com.example.demo.repository;

import com.example.demo.model.EmployeeModel;
import com.example.demo.model.WorkingModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface WorkingRepository extends JpaRepository<WorkingModel, Integer> {

}
