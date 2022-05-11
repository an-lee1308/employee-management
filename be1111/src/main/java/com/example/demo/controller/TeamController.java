package com.example.demo.controller;


import com.example.demo.DTO.TeamDTO;
import com.example.demo.model.EmployeeModel;
import com.example.demo.model.Team;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.TeamRepository;
import com.example.demo.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Team> getAllTeam(){
        return teamRepository.findAll();
//        return employeeRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public TeamDTO getTeam(@PathVariable("id") int id){
        return teamService.getTeamById(id);
//        return employeeRepository.findAll();
    }

    @GetMapping(value = "/test/{id}")
    public List<EmployeeModel> Test(@PathVariable("id") int id){
        return employeeRepository.findEmployeeInTeam(id);
//        return employeeRepository.findAll();
    }
}
