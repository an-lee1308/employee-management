package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

public class RestResponse {
    private int page;

    private int totalPage;
    private List<EmployeeModel> listResult = new ArrayList<>();
    public int getPage() {
        return page;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public List<EmployeeModel> getListResult() {
        return listResult;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public void setListResult(List<EmployeeModel> listResult) {
        this.listResult = listResult;
    }




}

