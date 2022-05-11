package com.example.demo.controller;

import com.example.demo.model.EmployeeModel;
import com.example.demo.model.ResponseObject;

import com.example.demo.model.WorkingModel;
import com.example.demo.repository.WorkingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/api/working")
public class WorkingController {

    @Autowired
    WorkingRepository workingRepository;
    //CRUD api
    @PostMapping(value="/insert")
    ResponseEntity<ResponseObject> addWorking(@RequestBody (required = false) WorkingModel working) {
//        Optional<WorkingModel> foundWorking = workingRepository.findById(working.getWorkingId());
//        if (foundWorking.equals(true)) {
//            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
//                    new ResponseObject("fail", "Working already taken", "")
//            );
//        }
        System.out.println(working);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Insert Working sucessfully", workingRepository.save(working))
        );
    }


//    @PostMapping("/insert")
//    ResponseEntity<ResponseObject> insertEmployee(@RequestBody EmployeeModel employee) {
//        Optional<EmployeeModel> foundEmployee = employeeRepository.findById(employee.getEmployeeId());
//        if (foundEmployee.equals(true)) {
//            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
//                    new ResponseObject("fail", "Employee already taken", "")
//            );
//        }
//        return ResponseEntity.status(HttpStatus.OK).body(
//                new ResponseObject("OK", "Insert Employee sucessfully", employeeRepository.save(employee))
//        );
//    }

//    @DeleteMapping("/delete/{id}")
//    ResponseEntity<ResponseObject> deleteEmployeeById(@PathVariable int id) {
//        boolean exist = employeeRepository.existsById(id);
//        if (!exist) {
//            employeeRepository.deleteById(id);
//            return ResponseEntity.status(HttpStatus.OK).body(
//                    new ResponseObject("ok", "Delete employee Successfully", ""));
//        }
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//                new ResponseObject("fail", "Cannot find employee to delete", ""));
//    }
}
