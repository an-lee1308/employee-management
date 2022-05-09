package com.example.demo.model;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Data
@Entity
@Table(name="working")
public class WorkingModel {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int workingId;
        @Column(name="date")
        private Date date;
        @Column(name="hour")
        private int hour;
        @ManyToOne
        @JoinColumn(name="employee_id")
        private EmployeeModel workingEmployee;
    }
