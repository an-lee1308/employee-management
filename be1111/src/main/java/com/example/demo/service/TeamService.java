
package com.example.demo.service;

import com.example.demo.DTO.EmployeeDTO;
import com.example.demo.DTO.TeamDTO;
import com.example.demo.mapper.Mapper;
import com.example.demo.model.EmployeeModel;
import com.example.demo.model.Team;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class TeamService implements ITeamService {
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private Mapper mapper;

    @Override
    public TeamDTO getTeamById(int id)       {
        Team team=teamRepository.getById(id);
        TeamDTO teamDTO=mapper.toTeamDTO(team);
        return  teamDTO;
    }
}


