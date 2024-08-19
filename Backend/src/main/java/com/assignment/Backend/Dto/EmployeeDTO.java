package com.assignment.Backend.Dto;
public class EmployeeDTO {

    private Integer employeeid;
    private String employeename;
    private String email;
    private String gender;
    private String password;

    public EmployeeDTO() {}

    public EmployeeDTO(Integer employeeid, String employeename, String email, String gender, String password) {
        this.employeeid = employeeid;
        this.employeename = employeename;
        this.email = email;
        this.gender = gender;
        this.password = password;
    }

    public Integer getEmployeeid() {
        return employeeid;
    }

    public void setEmployeeid(Integer employeeid) {
        this.employeeid = employeeid;
    }

    public String getEmployeename() {
        return employeename;
    }

    public void setEmployeename(String employeename) {
        this.employeename = employeename;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
