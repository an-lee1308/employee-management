package com.example.demo.controller;


import com.example.demo.DTO.TeamDTO;
import com.example.demo.model.EmployeeModel;
import com.example.demo.model.ResponseObject;
import com.example.demo.model.Team;
import com.example.demo.model.WorkingModel;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.TeamRepository;
import com.example.demo.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/team")
public class TeamController {
    @Autowired
    TeamRepository teamRepository;
    @Autowired
    TeamService teamService;
    @Autowired
    EmployeeRepository employeeRepository;


    @GetMapping(value = "/list")
    public List<Team> getAllTeam() {
        return teamRepository.findAll();
//        return employeeRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public TeamDTO getTeam(@PathVariable("id") int id) {
        return teamService.getTeamById(id);
//        return employeeRepository.findAll();
    }

    @PostMapping(value="/insert")
    ResponseEntity<ResponseObject> addNewTeam(@ModelAttribute Team team) {
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
        System.out.println(team);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Create New Team sucessfully", teamRepository.save(team))
        );
    }

    @GetMapping(value = "/test/{id}")
    public List<EmployeeModel> Test(@PathVariable("id") int id) {
        return employeeRepository.findEmployeeInTeam(id);
//        return employeeRepository.findAll();
    }
}
