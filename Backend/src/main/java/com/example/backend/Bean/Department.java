package com.example.backend.Bean;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "department")
public class Department {
    @Id
    @Column(name ="departmentId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer departmentId;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="capacity", nullable = false)
    private String capacity;

//    @OneToMany(mappedBy = "department")
//    private List<Employee> employeeList;

    public Department() {
    }

    public Department(String name, String capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    public Integer getDepartment_id() {return departmentId;}

    public void setDepartment_id(Integer department_id) {this.departmentId = department_id;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getCapacity() {return capacity;}

    public void setCapacity(String capacity) {this.capacity = capacity;}

    @Override
    public String toString() {
        return "Department{" +
                "department_id=" + departmentId +
                ", name='" + name + '\'' +
                ", capacity='" + capacity + '\'' +
                '}';
    }
}
