package com.example.demo.controller;

import com.example.demo.model.EmployeeModel;
import com.example.demo.model.ResponseObject;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
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
@CrossOrigin
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
//    public static Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    EmployeeService employeeService;
//CRUD api
    @PostMapping()
    public ResponseEntity<EmployeeModel> saveEmployee(@RequestBody EmployeeModel employee){
        return new ResponseEntity<EmployeeModel>(employeeService.saveEmployee(employee), HttpStatus.CREATED);
    }
    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertEmployee(@RequestBody EmployeeModel employee) {
        Optional<EmployeeModel> foundEmployee = employeeRepository.findById(employee.getEmployeeId());
        if (foundEmployee.equals(true)) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject("fail", "Employee already taken", "")
            );
        }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Insert Employee sucessfully", employeeRepository.save(employee))
            );
    }
    @PutMapping("/update/{id}")
    ResponseEntity<ResponseObject>updateEmployee(@RequestBody EmployeeModel newEmployee,@PathVariable int id) {
        EmployeeModel updateEmployee=employeeRepository.findById(id)
                .map(employee->{
                    employee.setImageURL(newEmployee.getImageURL());
                    return employeeRepository.save(employee);
                }).orElseGet(()->{
                    newEmployee.setEmployeeId(id);
                    return employeeRepository.save(newEmployee);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("ok","Update sucessfully",updateEmployee)
        );
    }
    @DeleteMapping("/delete/{id}")
    ResponseEntity<ResponseObject>deleteEmployeeById(@PathVariable int id) {
        boolean exist=employeeRepository.existsById(id);
        if(!exist)  {
            employeeRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Delete employee Successfully",""));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("fail","Cannot find employee to delete",""));
    }
    @GetMapping(value = "/list")
    public List<EmployeeModel> getAllEmployees(){
//        return employeeService.getAllEmployees();
        return employeeRepository.findAll();
    }
    @PutMapping("{id}")
    public ResponseEntity<EmployeeModel> updateEmployee(@PathVariable("id") int id
            ,@RequestBody EmployeeModel employee){
        return new ResponseEntity<EmployeeModel>(employeeService.updateEmployee(employee, id), HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id){

        // delete employee from DB
        employeeService.deleteEmployee(id);
        System.out.println(id);

        return new ResponseEntity<String>("Employee deleted successfully!.", HttpStatus.OK);
    }
//    @GetMapping(value = "/list/{name}")
//    public List<EmployeeModel> findEmployee(@PathVariable("name") String name){
//        return employeeService.findEmployeeByName();
//    }

    @GetMapping(value = "/name/{name}")
    public List<EmployeeModel> findEmployeeById(@PathVariable ("name") String employeeName){
//        return employeeService.getEmployeeById(employeeId);
        System.out.println(employeeName);
        return employeeService.findByName(employeeName);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<EmployeeModel> findEmployeeById(@PathVariable ("id") int employeeId){
//        return employeeService.getEmployeeById(employeeId);
        System.out.println(employeeId);
        return new ResponseEntity<EmployeeModel>(employeeService.getEmployeeById(employeeId), HttpStatus.OK);
    }
    //Chuẩn response
    @GetMapping(value = "/working/{id}")
    public ResponseEntity<ResponseObject> findMyAEmployee(@PathVariable int id) {
        Optional<EmployeeModel> foundEmployee=employeeRepository.findById(id);
        if(foundEmployee.isPresent())   {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok","Query successfully",foundEmployee)
            );
        }   else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("fail","Cannot find product with id = "+id,"")
            );
        }
    }
}
