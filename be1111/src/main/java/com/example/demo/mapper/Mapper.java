package com.example.demo.mapper;

import com.example.demo.DTO.EmployeeDTO;
import com.example.demo.DTO.TeamDTO;
import com.example.demo.model.Advances;
import com.example.demo.model.EmployeeModel;
import com.example.demo.model.Team;
import com.example.demo.model.WorkingModel;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;


@Component
public class Mapper {

    public EmployeeModel toEmployeeEntity(EmployeeDTO dto) {
        EmployeeModel entity = new EmployeeModel();
        entity.setEmployeeId(dto.getEmployeeId());
        entity.setFullName(dto.getFullName());
        entity.setAge(dto.getAge());
        entity.setGender(dto.getGender());
        entity.setAddress(dto.getAddress());
        entity.setPhoneNumber(dto.getPhoneNumber());
        entity.setStartDay(dto.getStartDay());
        entity.setMoneyPerHour(dto.getMoneyPerHour());
        entity.setTotalHours(dto.getTotalHours());
        entity.setImageURL(dto.getImageURL());
        return entity;
    }

        public EmployeeDTO toEmployeeDTO(EmployeeModel entity) {
            EmployeeDTO dto = new EmployeeDTO();
            if (entity.getEmployeeId()!=0) {
                dto.setEmployeeId(entity.getEmployeeId());
            }
            dto.setEmployeeId(entity.getEmployeeId());
            dto.setFullName(entity.getFullName());
            dto.setAge(entity.getAge());
            dto.setGender(entity.getGender());
            dto.setAddress(entity.getAddress());
            dto.setPhoneNumber(entity.getPhoneNumber());
            dto.setStartDay(entity.getStartDay());
            dto.setMoneyPerHour(entity.getMoneyPerHour());
            dto.setTotalHours(entity.getTotalHours());
            dto.setImageURL(entity.getImageURL());
            dto.setTeamInfo( entity.getEmployeeTeam());
            dto.setWorkingInfo( entity.getWorkings());
            dto.setAdvancesInfo( entity.getAdvances());
            return dto;
        }

    public Team toTeamEntity (TeamDTO dto) {
        Team entity = new Team();
        entity.setTeamId(dto.getTeamId());
        entity.setName(dto.getName());
        entity.setEmployee(dto.getEmployee());

        return entity;
    }

    public TeamDTO toTeamDTO(Team entity) {
        TeamDTO dto = new TeamDTO();
        if (entity.getTeamId()!=0) {
            dto.setTeamId(entity.getTeamId());
        }
        dto.setTeamId(entity.getTeamId());
        dto.setName(entity.getName());
        dto.setEmployee(entity.getEmployee());

        return dto;
    }
//
//        public NewEntity toEntity(NewDTO dto, NewEntity entity) {
//            entity.setTitle(dto.getTitle());
//            entity.setContent(dto.getContent());
//            entity.setShortDescription(dto.getShortDescription());
//            entity.setThumbnail(dto.getThumbnail());
//            return entity;
//        }
}
