//package com.example.demo.service;
//
//import com.example.demo.model.EmployeeModel;
//import com.example.demo.model.WorkingModel;
//import com.example.demo.repository.EmployeeRepository;
//import com.example.demo.repository.WorkingRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.crossstore.ChangeSetPersister;
//import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.util.ObjectUtils;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class WorkingService {
//    @Autowired
//    private WorkingRepository workingRepository;
//
//    @Autowired
//    private static EmployeeService employeeService;
//
//    public static List<WorkingModel> getWorkingDayOfEmployee(long employeeId) {
//
//        EmployeeModel employee = employeeService.getEmployeeById(employeeId);
//        System.out.println(employee);
////        if (ObjectUtils.isEmpty(employee)) {
////            throw new NotFoundException("User id is not exist");
////        }
//
////        List<WorkingModel> response = WorkingRepository.findByOwner(profile);
//
////        return response;
//        List<WorkingModel> response=new ArrayList<>();
//        return response;
//
//    }
//}
