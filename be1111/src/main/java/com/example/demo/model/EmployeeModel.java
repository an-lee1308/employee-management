package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Getter
@Setter
@Entity
@Table(name = "employee")
public class EmployeeModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeId;
    @Column(name = "full_name", nullable = false)
    private String fullName;
    @Column(name = "age")
    private int age;
    @Column(name = "gender")
    private String gender;
    @Column(name = "address")
    private String address;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "start_day")
    private Date startDay;
    @Column(name = "money_per_hour")
    private int moneyPerHour;
    @Column(name = "total_hours")
    private int totalHours;
    @Column(name = "image_URL")
    private String imageURL;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    @JsonIgnore
    private Team employeeTeam;
    @OneToMany(mappedBy = "employeeModel",cascade = CascadeType.ALL, fetch = FetchType.LAZY)

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JsonIgnore
    private List<WorkingModel> workings = new ArrayList<>();
//    private Set<WorkingModel> workings =new HashSet<>();

    @OneToMany(mappedBy = "employeeModel", fetch = FetchType.LAZY)

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JsonIgnore
    private List<Advances> advances = new ArrayList<>();
//    private Set<Advances> advances =new HashSet<>();
//    private List<WorkingModel> workings = new ArrayList<>();

// mapping onetomany

}
