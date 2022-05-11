package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Getter
@Setter
@Entity
@Table(name = "advances")
public class Advances implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int advancesId;
    @Column(name = "date")
    private Date date;
    @Column(name = "money")
    private int money;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id")
    @JsonIgnore
    private EmployeeModel advancesEmployee;
}
