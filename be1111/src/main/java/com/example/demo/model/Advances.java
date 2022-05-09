package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


    @Data
    @Entity
    @Table(name="advances")
    public class Advances{
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int advancesId;
        @Column(name="date")
        private Date date;
        @Column(name="money")
        private int money;

        @ManyToOne
        @JoinColumn(name="employee_id")
        private EmployeeModel advancesEmployee;
    }
