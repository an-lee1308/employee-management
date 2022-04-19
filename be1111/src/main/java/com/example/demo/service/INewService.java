package com.example.demo.service;

import com.example.demo.model.EmployeeModel;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface INewService {
    EmployeeModel saveEmployee(EmployeeModel employee);
    List<EmployeeModel> getAllEmployees();
    EmployeeModel updateEmployee(EmployeeModel employee, long id);
    void deleteEmployee(long id);
    public List<EmployeeModel> findByName(String name);
}
