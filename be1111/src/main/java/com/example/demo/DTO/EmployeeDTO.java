package com.example.demo.DTO;

import com.example.demo.model.Advances;
import com.example.demo.model.Team;
import com.example.demo.model.WorkingModel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class EmployeeDTO {
    private Integer employeeId;

    private String fullName;

    private Integer age;

    private String gender;

    private String address;

    private String phoneNumber;

    private Date startDay;

    private Integer moneyPerHour;

    private Integer totalHours;

    private String imageURL;

    private Team teamInfo;

    private String teamName;

    private Integer teamId;

    private List<WorkingModel> workingInfo;
    private List<Advances> advancesInfo;
}
