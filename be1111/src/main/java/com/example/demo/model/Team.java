package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;


@Getter
@Setter
@Entity
@Table(name = "team")
public class Team implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int teamId;
    @Column(name = "name")
    private String name;
    @OneToMany(mappedBy = "employeeTeam", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<EmployeeModel> employee = new ArrayList<>();
//    private Set<EmployeeModel> employees =new HashSet<>();
}
