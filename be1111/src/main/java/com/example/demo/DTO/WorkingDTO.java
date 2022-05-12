package com.example.demo.DTO;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class WorkingDTO {
    private int workingId;

    private Date date;

    private int hour;

    private int employeeId;

}
