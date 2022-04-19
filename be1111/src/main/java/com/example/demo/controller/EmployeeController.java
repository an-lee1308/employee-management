package com.example.demo.controller;

import com.example.demo.model.EmployeeModel;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.service.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeController {
    public static Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    EmployeeService employeeService;
//CRUD api
    @PostMapping()
    public ResponseEntity<EmployeeModel> saveEmployee(@RequestBody EmployeeModel employee){
        return new ResponseEntity<EmployeeModel>(employeeService.saveEmployee(employee), HttpStatus.CREATED);
    }
    @GetMapping
    public List<EmployeeModel> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
    @PutMapping("{id}")
    public ResponseEntity<EmployeeModel> updateEmployee(@PathVariable("id") long id
            ,@RequestBody EmployeeModel employee){
        return new ResponseEntity<EmployeeModel>(employeeService.updateEmployee(employee, id), HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") long id){

        // delete employee from DB
        employeeService.deleteEmployee(id);

        return new ResponseEntity<String>("Employee deleted successfully!.", HttpStatus.OK);
    }

}
