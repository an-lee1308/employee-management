package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Data
    @Entity
    @Table(name="team")
    public class Team {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int teamId;
        @Column(name="name")
        private String name;
    @OneToMany(fetch = FetchType.LAZY)
    private List<EmployeeModel> employeeModelList = new ArrayList<>();
    }
