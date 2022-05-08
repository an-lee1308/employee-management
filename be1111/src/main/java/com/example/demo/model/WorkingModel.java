package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Data
    @Entity
    @Table(name="working")
    public class WorkingModel {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "working_id")
        private int workingId;
        @Column(name="date",nullable = false)
        private Date date;
        @Column(name="hour")
        private int hour;
        @ManyToOne
        @JoinColumn(name="employee_id",nullable = false)
        private EmployeeModel employee;

        public int getWorkingId() {
            return workingId;
        }

        public Date getDate() {
            return date;
        }

        public int getHour() {
            return hour;
        }

        public EmployeeModel getEmployee() {
            return employee;
        }

        public void setWorkingId(int workingId) {
            this.workingId = workingId;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public void setHour(int hour) {
            this.hour = hour;
        }

        public void setEmployee(EmployeeModel employee) {
            this.employee = employee;
        }
    }
