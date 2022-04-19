package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="employee")
public class EmployeeModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="full_name",nullable = false)
    private String fullName;
    @Column(name="age")
    private int age;
    @Column(name="gender")
    private int gender;
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
    @Column(name="teamID")
    private int teamID;

    public long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public int getAge() {
        return age;
    }

    public int getGender() {
        return gender;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public Date getStartDay() {
        return startDay;
    }

    public int getMoneyPerHour() {
        return moneyPerHour;
    }

    public int getTotalHours() {
        return totalHours;
    }

    public String getImageURL() {
        return imageURL;
    }

    public int getTeamID() {
        return teamID;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setStartDay(Date startDay) {
        this.startDay = startDay;
    }

    public void setMoneyPerHour(int moneyPerHour) {
        this.moneyPerHour = moneyPerHour;
    }

    public void setTotalHours(int totalHours) {
        this.totalHours = totalHours;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public void setTeamID(int teamID) {
        this.teamID = teamID;
    }
}
