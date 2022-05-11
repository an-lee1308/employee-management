package com.example.demo.service;

import com.example.demo.DTO.EmployeeDTO;
import com.example.demo.model.EmployeeModel;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface INewService {
    EmployeeModel saveEmployee(EmployeeModel employee);

    List<EmployeeDTO> getAllEmployees();

    EmployeeModel updateEmployee(EmployeeModel employee, int id);

    void deleteEmployee(int id);

    List<EmployeeModel> findByName(String name);

    EmployeeDTO getEmployeeById(int id);
}
