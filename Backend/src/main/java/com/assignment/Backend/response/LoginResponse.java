package com.assignment.Backend.response;
public class LoginResponse {

    private String message;
    private Boolean status;
    private Integer employeeid;
    private String employeename;

    public LoginResponse() {}

    public LoginResponse(String message, Boolean status, Integer employeeid, String employeename) {
        this.message = message;
        this.status = status;
        this.employeeid = employeeid;
        this.employeename = employeename;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
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
}
