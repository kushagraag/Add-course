package com.example.backend.DAO;

import com.example.backend.Bean.Course;
import com.example.backend.Bean.Employee;
import com.example.backend.Bean.Specialisation;

import java.util.List;

public interface CourseDAO {
    boolean addCourse(Course courseObj);

    List<Course> getCourses();

    List<Specialisation> getSpecialisations();

    List<Employee> getFaculty();
}
