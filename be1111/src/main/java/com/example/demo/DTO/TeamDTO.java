package com.example.demo.DTO;


import com.example.demo.model.EmployeeModel;
import com.example.demo.model.WorkingModel;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TeamDTO {
        private int teamId;
        private String name;
        private List<EmployeeModel> employee;
}
