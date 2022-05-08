package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name="employee")
public class EmployeeModel{
//    @Autowired WorkingModel workingModel;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="employee_id")
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
    @Column(name="team")
    private String team;
    @OneToMany(mappedBy = "working",cascade = CascadeType.ALL)
    private List<WorkingModel> workings = new ArrayList<>();

// mapping onetomany
    public int getEmployeeId() {
        return employeeId;
    }

    public String getFullName() {
        return fullName;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
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

    public String getTeam() {
        return team;
    }

    public List<WorkingModel> getWorkings() {
        return workings;
    }

    public void setEmployeeId(int id) {
        this.employeeId = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(String gender) {
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

    public void setTeam(String team) {
        this.team = team;
    }

    public void setWorkings(List<WorkingModel> workings) {
        this.workings = workings;
    }

}
