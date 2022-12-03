package com.example.backend.Bean;

import jakarta.persistence.*;
import java.util.List;


@Entity
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer course_id;

    @Column(nullable = false, unique = true)
    private String course_code;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column(nullable = false)
    private Integer year;

    @Column(nullable = false)
    private Integer term;

    @Column(nullable = false)
    private Integer credits;

    @Column(nullable = false)
    private Integer capacity;

    @Column(nullable = false)
    private String schedule;

    @Column
    private String prerequisite;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="employeeId")
    private Employee employee;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "specialisationId")
    private Specialisation specialisation;


    public Course() {
    }

    public Course(String course_code, String name, String description, Integer year, Integer term, Integer credits, Integer capacity, String schedule, String prerequisite, Specialisation specialisation, Employee employee) {
        this.course_code = course_code;
        this.name = name;
        this.description = description;
        this.year = year;
        this.term = term;
        this.credits = credits;
        this.capacity = capacity;
        this.schedule = schedule;
        this.prerequisite = prerequisite;
        this.employee = employee;
        this.specialisation = specialisation;
    }

    public Integer getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Integer course_id) {
        this.course_id = course_id;
    }

    public String getCourse_code() {
        return course_code;
    }

    public void setCourse_code(String course_code) {
        this.course_code = course_code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getTerm() {
        return term;
    }

    public void setTerm(Integer term) {
        this.term = term;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public Specialisation getSpecialisation() {
        return specialisation;
    }

    public void setSpecialisation(Specialisation specialisation) {
        this.specialisation = specialisation;
    }

    public String getPrerequisite() {
        return prerequisite;
    }

    public void setPrerequisite(String prerequisite) {
        this.prerequisite = prerequisite;
    }

    public Employee getFaculty() {
        return employee;
    }

    public void setFaculty(Employee faculty) {
        this.employee = faculty;
    }

    @Override
    public String toString() {
        return "Course{" +
                "course_id=" + course_id +
                ", course_code='" + course_code + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", year=" + year +
                ", term=" + term +
                ", credits=" + credits +
                ", capacity=" + capacity +
                ", schedule='" + schedule + '\'' +
                ", prerequisite='" + prerequisite + '\'' +
                ", employeeId=" + employee +
                ", specialisation=" + specialisation +
                '}';
    }
}
