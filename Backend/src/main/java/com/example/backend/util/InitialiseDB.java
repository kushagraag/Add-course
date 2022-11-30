package com.example.backend.util;
//
//import com.example.backend.Bean.Course;
//import com.example.backend.Bean.Department;
//import com.example.backend.Bean.Employee;
//import com.example.backend.Bean.Specialisation;
//import com.example.backend.DAO.CourseDAO;
//import com.example.backend.DAO.DepartmentDAO;
//import com.example.backend.DAO.EmployeeDAO;
//import com.example.backend.DAO.SpecialisationDAO;
//import com.example.backend.DAO.impl.CourseDAOImpl;
//import com.example.backend.DAO.impl.DepartmentDAOImpl;
//import com.example.backend.DAO.impl.EmployeeDAOImpl;
//import com.example.backend.DAO.impl.SpecialisationDAOImpl;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            // WARNING:
//                        // RUN ONLY ONCE BEFORE STARTING ACTUAL PROJECT.
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//
//public class InitialiseDB {
//
//    public static void main(String[] args){
//
//        List<List<Object>> employees = Arrays.asList(
//                Arrays.asList("Punit", "Kumar", "Punit.Kumar@one.com", "Mr", "1234"),
//                Arrays.asList("Ranya", "Sunder", "Ranya.Sunder@one.com", "Ms", "1234"),
//                Arrays.asList("Aryan", "Verma", "Aryan.Verma@one.com", "Mr", "1234"),
//                Arrays.asList("Bhavana", "Agrawal", "Bhavana.Agrawal@one.com", "Ms", "1234"),
//                Arrays.asList("Deepti", "Sharma", "Deepti.Sharma@one.com", "Ms", "1234"),
//                Arrays.asList("Saksham", "Verma", "Saksham.Verma@one.com", "Mr", "1234")
//        );
//
//        List<List<String>> departments = Arrays.asList(
//                Arrays.asList("Admin", "300"),
//                Arrays.asList("Communication", "300"),
//                Arrays.asList("Security", "300")
//        );
//
//        List<List<Object>> courses = Arrays.asList(
//                Arrays.asList("CS101", "Basics of Computer Science", "History and basic introductions",  2016, 2 , 4, 100, "Mon 09:30"),
//                Arrays.asList("CS102", "Basics of Programming", "History and basic introductions", 2017, 2, 4, 120, "Wed 11:15"),
//                Arrays.asList("AI103", "Machine Learning", "History and basic introductions", 2019, 2, 4, 50, "Tue 09:30")
//        );
//
//        List<List<Object>> specialisations = Arrays.asList(
//                Arrays.asList("TSCD", "Theory and Systems for Computing and Data", "Theory and Systems for Computing and Data", 2, 20),
//                Arrays.asList("AIML", "Artificial Intelligence and Machine Learning", "Artificial Intelligence and Machine Learning", 2, 20),
//                Arrays.asList("NC", "Networking and Communication", "Networking and Communication", 2, 20),
//                Arrays.asList("VLSI", "VLSI Systems", "VLSI Systems", 2, 20),
//                Arrays.asList("DT", "Digital Society", "Digital Society", 2, 20),
//                Arrays.asList("CY", "Cyber Security", "Cyber Security", 2, 20)
//        );
//
//
//        // Employee Data
//        // employee with department attached
//        EmployeeDAO employeeDAO = new EmployeeDAOImpl();
//        DepartmentDAO departmentDAO = new DepartmentDAOImpl();
//
//        List<Employee> employeeList = new ArrayList<>();
//
//        for(List<Object> employee:employees){
//            Employee employeeObj = new Employee((String)employee.get(0), (String)employee.get(1), (String)employee.get(2), (String)employee.get(3), (String)employee.get(4));
//            employeeList.add(employeeObj);
//        }
//
//        for (int i=0; i<departments.size(); i++) {
//            List<String> department = departments.get(i);
//            Department departmentObj = new Department(department.get(0), department.get(1));
//
//            // Set departments of employees
//            employeeList.get(2*i).setDepartment(departmentObj);
//            employeeList.get((2*i)+1).setDepartment(departmentObj);
//
//            // Set employeeList of department
//            departmentObj.setEmployeeList(Arrays.asList(employeeList.get(i), employeeList.get(i+1)));
//
//            departmentDAO.addDepartment(departmentObj);
//
//            employeeDAO.addEmployee(employeeList.get(2*i));
//            employeeDAO.addEmployee(employeeList.get((2*i)+1));
//        }

//        for(int i=0; i<employees.size(); i++){
//            List<String> employee = employees.get(i);
//            System.out.println(i + " " + employee);
//            Employee emp = new Employee(employee.get(0), employee.get(1), employee.get(2), employee.get(3), employee.get(4));
//            if(employeeDAO.addEmployee(emp)){
//                System.out.println("Employee " + (i+1) + " added");
//            }
//        }

//        List<Department> departmentList = new ArrayList<>();
//        for(List<Object> department: departments){
//            Department departmentObj = new Department((String)department.get(0), (Integer)department.get(1));
//            departmentList.add(departmentObj);
//        }

//        for(int i=0; i<departments.size(); i++){
//            System.out.println(departmentList.get(i));
//            if(departmentDAO.addDepartment(departmentList.get(i))){
//                System.out.println("Inserted " + (i+1) + " to Course");
//            }
//        }

        // Course Data
//        List<Course> courseList = new ArrayList<>();
//        for(List<Object> course: courses){
//            Course courseObj = new Course((String)course.get(0), (String)course.get(1), (String)course.get(2), (Integer)course.get(3), (Integer)course.get(4), (Integer)course.get(5), (Integer)course.get(6), (String)course.get(7), null);
//            courseList.add(courseObj);
//        }
//
//        CourseDAO courseDAO = new CourseDAOImpl();
//        for(int i=0; i<courses.size(); i++){
////            List<Course> course = courseList.get(i);
//            System.out.println(courseList.get(i));
//
//            if(courseDAO.addCourse(courseList.get(i))){
//                System.out.println("Inserted " + (i+1) + " to Course");
//            }
//        }
//
//        // Specialisation Data
//        List<Specialisation> specialisationList = new ArrayList<>();
//        for(List<Object> spec: specialisations){
//            Specialisation specialisationObj = new Specialisation((String)spec.get(0), (String)spec.get(1), (String)spec.get(2), (Integer)spec.get(3), (Integer)spec.get(4));
//            specialisationList.add(specialisationObj);
//        }
//
//        SpecialisationDAO specialisationDAO = new SpecialisationDAOImpl();
//        for(int i=0; i<specialisations.size(); i++){
////            List<Course> course = courseList.get(i);
//            System.out.println(specialisationList.get(i));
//
//            if(specialisationDAO.addSpecialisation(specialisationList.get(i))){
//                System.out.println("Inserted " + (i+1) + " to Course");
//            }
//        }
//

//    }
//}
