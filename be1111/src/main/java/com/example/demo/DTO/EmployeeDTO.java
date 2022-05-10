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
    private int employeeId;

    private String fullName;

    private int age;

    private String gender;

    private String address;

    private String phoneNumber;

    private Date startDay;

    private int moneyPerHour;

    private int totalHours;

    private String imageURL;

    private Team teamInfo;
    private List<WorkingModel> workingInfo;
    private List<Advances> advancesInfo;
}
