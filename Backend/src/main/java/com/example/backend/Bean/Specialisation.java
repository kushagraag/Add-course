package com.example.backend.Bean;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "specialisation")
public class Specialisation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer specialisation_id;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @Column
    private String description;

    @Column()
    private Integer year;

    @Column(name = "creditsRequired")
    private Integer credits_required;

    public Specialisation() {
    }

    public Specialisation(String code, String name, String description, Integer year, Integer credits_required) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.year = year;
        this.credits_required = credits_required;
    }

    public Integer getSpecialisation_id() {
        return specialisation_id;
    }

    public void setSpecialisation_id(Integer specialisation_id) {
        this.specialisation_id = specialisation_id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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

    public Integer getCredits_required() {
        return credits_required;
    }

    public void setCredits_required(Integer credits_required) {
        this.credits_required = credits_required;
    }

    @Override
    public String toString() {
        return "Specialisation{" +
                "specialisation_id=" + specialisation_id +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", year=" + year +
                ", credits_required=" + credits_required +
                '}';
    }
}

