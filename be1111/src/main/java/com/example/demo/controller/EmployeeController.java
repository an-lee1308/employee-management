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
//@GetMapping("/query/{fruitname}")
//public ResponseEntity<Fruit> queryFruit(@PathVariable String fruitname){
//        if (fruitname.equalsIgnoreCase("banana"))
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        return new ResponseEntity(new Fruit(fruitname, "Orange"), HttpStatus.OK);
//        }

// CommandLineRunner run() {
//         return args -> {
//         // Lấy ra 5 user đầu tiên
//         // PageRequest.of(0,5) tương đương với lấy ra page đầu tiên, và mỗi page sẽ có 5 phần tử
//         Page<User> page = userRepository.findAll(PageRequest.of(0, 5));
//        // In ra 5 user đầu tiên
//        System.out.println("In ra 5 user đầu tiên: ");
//        page.forEach(System.out::println);
//        // Lấy ra 5 user tiếp theo
//        page = userRepository.findAll(page.nextPageable());
//
//        System.out.println("In ra 5 user tiếp theo: ");
//        page.forEach(System.out::println);
//
//        System.out.println("In ra số lượng user ở page hiện tại: " + page.getSize());
//        System.out.println("In ra tổng số lượng user: " + page.getTotalElements());
//        System.out.println("In ra tổng số page: " + page.getTotalPages());
//
//        // Lấy ra 5 user ở page 1, sort theo tên
//        page = userRepository.findAll(PageRequest.of(1, 5, Sort.by("name").descending()));
//        System.out.println("In ra 5 user page 1, sắp xếp theo name descending:");
//        page.forEach(System.out::println);
//
//        // Custom method
//        List<User> list = userRepository.findAllByNameLike("name-%", PageRequest.of(0, 5));
//        System.out.println(list);
//        };
//        }
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
    @GetMapping(value = "/list")
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
    @GetMapping(value = "/list/{name}")
    public List<EmployeeModel> findEmployee(@PathVariable("name") String name){
        return employeeService.findEmployeeByName();
    }
}
