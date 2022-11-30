package com.example.backend.DAO.impl;

import com.example.backend.Bean.Course;
import com.example.backend.Bean.Employee;
import com.example.backend.Bean.Specialisation;
import com.example.backend.DAO.CourseDAO;

import com.example.backend.DAO.EmployeeDAO;
import com.example.backend.util.HibernateSessionUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

public class CourseDAOImpl implements CourseDAO {

    @Override
    public boolean addCourse(Course courseObj){
        try(Session session = HibernateSessionUtil.getSession()){
            Transaction transaction = session.beginTransaction();
            session.save(courseObj);
            transaction.commit();
            return true;
        }
        catch (HibernateException exception) {
            System.out.println("Hibernate Exception");
            System.out.print(exception.getLocalizedMessage());
            return false;
        }
        catch ( Exception e){
            System.out.print(e.getLocalizedMessage());
            return false;
        }
    }

    @Override
    public List<Course> getCourses() {
        try (Session session = HibernateSessionUtil.getSession()){
            List<Course> courseList = new ArrayList<>();
            for (final Object d : session.createQuery("from Course").list()) {
                courseList.add((Course) d);
            }
            return courseList;

        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
            return null;
        }
    }

    @Override
    public List<Specialisation> getSpecialisations() {
        try (Session session = HibernateSessionUtil.getSession()){
            List<Specialisation> specialisationList = new ArrayList<>();
            for (final Object d : session.createQuery("from Specialisation").list()) {
                specialisationList.add((Specialisation) d);
            }
            return specialisationList;

        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
            return null;
        }
    }

    @Override
    public List<Employee> getFaculty() {
        try (Session session = HibernateSessionUtil.getSession()) {
            List<Employee> employeeList = new ArrayList<>();
            for (final Object d : session.createQuery("from Employee").list()) {
                employeeList.add((Employee) d);
            }
            return employeeList;

        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
            return null;
        }
    }


}
