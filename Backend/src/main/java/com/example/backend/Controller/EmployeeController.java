package com.example.backend.Controller;

import com.example.backend.Bean.Employee;
import com.example.backend.DAO.EmployeeDAO;
import com.example.backend.DAO.impl.EmployeeDAOImpl;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("employee")
public class EmployeeController {
    EmployeeDAO employeeDAO = new EmployeeDAOImpl();
    @POST
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(Employee employee) {
        System.out.println(String.valueOf(employee)+ "employee controller login");
        boolean checkEmp = false;
        checkEmp = employeeDAO.login(employee);
        System.out.println(checkEmp+" cheking emp");
        if(checkEmp){
            return Response.status(200).entity("Admin Login Success!").build();
        }
        else{
            return Response.status(400).entity("Failure Admin Login!").build();
        }
    }
}
