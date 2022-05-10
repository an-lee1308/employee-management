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
        existingEmployee.setTeam(employee.getTeam());



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
        return  employeeRepository.findByFullName(name);
    }


@Override
public EmployeeModel getEmployeeById(int id)       {
    return employeeRepository.findById(id).get(); //No serializer found for class org.hibernate.proxy.pojo.bytebuddy.ByteBuddyInterceptor
}
}
