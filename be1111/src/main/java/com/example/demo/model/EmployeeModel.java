package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name="employee")
public class EmployeeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeId;
    @Column(name="full_name",nullable = false)
    private String fullName;
    @Column(name="age")
    private int age;
    @Column(name="gender")
    private String gender;
    @Column(name="address")
    private String address;
    @Column(name="phone_number")
    private String phoneNumber;
    @Column(name="start_day")
    private Date startDay;
    @Column(name="money_per_hour")
    private int moneyPerHour;
    @Column(name="total_hours")
    private int totalHours;
    @Column(name="image_URL")
    private String imageURL;
//    @Column(name="team_id")
//    private int teamId;
    @ManyToOne
    @JoinColumn(name="team_id")
    private Team team;

    @OneToMany(mappedBy = "workingEmployee",fetch = FetchType.LAZY)
    private List<WorkingModel> workings = new ArrayList<>();

    @OneToMany(mappedBy = "advancesEmployee",fetch = FetchType.LAZY)

    private List<Advances> advances = new ArrayList<>();
//    private List<WorkingModel> workings = new ArrayList<>();

// mapping onetomany


}
