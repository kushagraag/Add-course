package com.example.backend.Bean;

import jakarta.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employeeId;

    @Column(nullable = false)
    private String first_name;

    @Column
    private String last_name;

    @Column()
    private String email;

    @Column
    private String title;

    @Column(nullable = false)
    private String password;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="employeeDepartmentId")
    private Department employeeDepartment;

    public Employee() {
    }

    public Employee(String first_name, String last_name, String email, String title, String password, Department employeeDepartment) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.title = title;
        this.password = password;
        this.employeeDepartment = employeeDepartment;
    }

    public Integer getEmployee_id() {
        return employeeId;
    }

    public void setEmployee_id(Integer employee_id) {
        this.employeeId = employeeId;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Department getDepartment() {
        return employeeDepartment;
    }

    public void setDepartment(Department department) {
        this.employeeDepartment = department;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employee_id=" + employeeId +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", title='" + title + '\'' +
                ", password='" + password + '\'' +
                ", department=" + employeeDepartment +
                '}';
    }
}
