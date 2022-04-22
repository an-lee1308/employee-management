package com.example.demo.service;

import com.example.demo.model.EmployeeModel;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeService implements INewService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeModel saveEmployee(EmployeeModel employee) {
        return employeeRepository.save(employee);
    }
    @Override
    public List<EmployeeModel> getAllEmployees() {
        return employeeRepository.findAll();
    }
    @Override
    public EmployeeModel updateEmployee(EmployeeModel employee, long id) {

        // we need to check whether employee with given id is exist in DB or not

        // save existing employee to DB
        employeeRepository.save(employee);
        return employee;
    }
    @Override
    public void deleteEmployee(long id) {

        // check whether a employee exist in a DB or not
        employeeRepository.deleteById(id);
    }
//    @Override
//    public List<EmployeeModel> findEmployeeByName(String name)  {
//        return employeeRepository.findAll(name);
//    }

}
