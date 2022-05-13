package com.example.demo.service;

import com.example.demo.DTO.EmployeeDTO;
import com.example.demo.mapper.Mapper;
import com.example.demo.model.EmployeeModel;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class EmployeeService implements INewService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private Mapper mapper;

    @Override
    public EmployeeModel saveEmployee(EmployeeModel employee) {
        return employeeRepository.save(employee);
    }

    //    @Override
//    public List<EmployeeDTO> getAllEmployees() {
//
//        return  employeeRepository.findAll();
//    }
    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<EmployeeModel> employeeList = employeeRepository.findAll();
        System.out.println(employeeList);
        List<EmployeeDTO> employeeDTOList = new ArrayList<>();
        employeeList.stream().forEach(employee -> {
//            EmployeeDTO employeeDTO=mapper.toEmployeeDTO(employee);
            employeeDTOList.add(mapper.toEmployeeDTOList(employee));
        });
        return employeeDTOList;
    }

    @Override
    public EmployeeModel updateEmployee(EmployeeModel employee, int id) {

        // we need to check whether employee with given id is exist in DB or not

//        EmployeeModel employeeInDb=employeeRepository.getById(id);
//        if(employeeInDb == null) {
//            return ResponseEntity.notFound().build();
//        }
//        employeeInDb.setFullName(EmployeeModel.getFullName());
//        employeeInDb.setAge(EmployeeModel.getAge());

        EmployeeModel existingEmployee = employeeRepository.getById(id);
        existingEmployee.setFullName(employee.getFullName());
        existingEmployee.setAge(employee.getAge());
        existingEmployee.setGender(employee.getGender());
        existingEmployee.setAddress(employee.getAddress());

        existingEmployee.setPhoneNumber(employee.getPhoneNumber());
        existingEmployee.setStartDay(employee.getStartDay());
        existingEmployee.setMoneyPerHour(employee.getMoneyPerHour());
        existingEmployee.setTotalHours(employee.getTotalHours());
        existingEmployee.setImageURL(employee.getImageURL());
        existingEmployee.setEmployeeTeam(employee.getEmployeeTeam());


        // save existing employee to DB
        employeeRepository.save(existingEmployee);
        return existingEmployee;
    }

    @Override
    public void deleteEmployee(int id) {

        // check whether a employee exist in a DB or not
        employeeRepository.deleteById(id);
    }

    @Override
    public List<EmployeeModel> findByName(String name) {
        return employeeRepository.findByFullName(name);
    }


    @Override
    public EmployeeDTO getEmployeeById(int id) {
        EmployeeModel employee = employeeRepository.getById(id);
        EmployeeDTO employeeDTO = mapper.toEmployeeDTO(employee);
        return employeeDTO;
    }
}
