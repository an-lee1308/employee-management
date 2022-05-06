//package com.example.demo.model;
//
//import lombok.Data;
//
//import javax.persistence.*;
//import java.io.Serializable;
//import java.util.Date;
//    @Data
//    @Entity
//    @Table(name="working")
//    public class WorkingModel implements Serializable {
//        @Id
//        @GeneratedValue(strategy = GenerationType.IDENTITY)
//        private long id;
//        @Column(name="date",nullable = false)
//        private Date date;
//        @Column(name="hour")
//        private int hour;
//        @ManyToOne
//        @JoinColumn(name="employee_id",nullable = false,referencedColumnName = "")
//        @Column(name="employee_id")
//        private int employeeId;
//}
