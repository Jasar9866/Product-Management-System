
package com.assignment.Backend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Integer employeeid;

    @Column(name = "employee_name", nullable = false)
    private String employeename;

    @Column(name = "employee_email", nullable = false, unique = true)
    private String email;

    @Column(name = "employee_gender", nullable = false)
    private String gender;

    @Column(name = "password", nullable = false)
    private String password;

    public Employee() {}

    public Employee(Integer employeeid, String employeename, String email, String gender, String password) {
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
