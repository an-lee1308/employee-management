package com.example.demo.repository;

import com.example.demo.model.EmployeeModel;
import com.example.demo.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.stream.Stream;

import static org.hibernate.loader.Loader.SELECT;


public interface TeamRepository extends JpaRepository<Team, Integer> {

}
