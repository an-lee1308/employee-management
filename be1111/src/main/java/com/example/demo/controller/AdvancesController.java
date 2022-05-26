package com.example.demo.controller;

import com.example.demo.model.Advances;
import com.example.demo.model.ResponseObject;

import com.example.demo.repository.AdvancesRepository;
import com.example.demo.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/advances")
public class AdvancesController {
    @Autowired
    AdvancesRepository advancesRepository;
    //CRUD api
    @Autowired
    EmployeeRepository employeeRepository;
    @PostMapping(value="/insert")
    ResponseEntity<ResponseObject> addAdvances(@ModelAttribute Advances advances) {
//        Optional<WorkingModel> foundWorking = workingRepository.findById(working.getWorkingId());
//        if (foundWorking.equals(true)) {
//            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
//                    new ResponseObject("fail", "Working already taken", "")
//            );
//        }
//        WorkingModel working = new WorkingModel();
//        System.out.println(req);
//        EmployeeModel employeeModel = employeeRepository.findById(working.getEmployeeModel().getEmployeeId()).get();
//        working.setEmployeeModel(employeeModel);
        System.out.println("hello");
        System.out.println(advances);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Insert Advances sucessfully", advancesRepository.save(advances))
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

    @DeleteMapping("/delete/{id}")
    ResponseEntity<ResponseObject> deleteAdvancesById(@PathVariable int id) {
        System.out.println(id);
        boolean exist = advancesRepository.existsById(id);
        if (exist) {
            advancesRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "Delete Advances Successfully", ""));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("fail", "Cannot find Advances to delete", ""));
    }
}
