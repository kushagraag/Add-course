package com.example.backend.Controller;

import com.example.backend.Bean.Course;
import com.example.backend.Bean.Employee;
import com.example.backend.Bean.Specialisation;
import com.example.backend.DAO.CourseDAO;
import com.example.backend.DAO.impl.CourseDAOImpl;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.net.URISyntaxException;
import java.util.List;

@Path("course")
public class CourseController {

    CourseDAO courseDAO =  new CourseDAOImpl();

//    @POST
//    @Path("/addCourse")
//    @Produces(MediaType.APPLICATION_JSON) //return type
//    @Consumes(MediaType.APPLICATION_JSON) //parameter
//    public Response addCourse(Course course){
//        System.out.printf(String.valueOf(course));
//        if(courseDAO.addCourse(course)){
//            return Response.status(200).entity("Success").build();
//        }
//        return Response.status(400).entity("Failure while adding course!!").build();
//    }

    @POST
    @Path("/addCourse")
    @Produces(MediaType.APPLICATION_JSON) //return type
    @Consumes(MediaType.APPLICATION_JSON) //parameter
    public Response addCourse(Course course){
        System.out.printf(String.valueOf(course) + "course received");
        System.out.println("Inside add course. Testing success");
        if(courseDAO.addCourse(course)){
            return Response.status(200).entity("Success").build();
        }
        return Response.status(400).entity("Failure while adding course!!").build();
    }

    @GET
    @Path("/getCourses")
    @Produces(MediaType.APPLICATION_JSON) //return type
    @Consumes(MediaType.APPLICATION_JSON) //parameter
    public Response getCourses() throws URISyntaxException {
        List<Course> courseList = courseDAO.getCourses();
        if(courseList != null)  return Response.ok().entity(courseList).build();
        return Response.status(400).entity("Failure while fetching course!!").build();
    }

    @GET
    @Path("/getSpecialisations")
    @Produces(MediaType.APPLICATION_JSON) //return type
    @Consumes(MediaType.APPLICATION_JSON) //parameter
    public Response getSpecialisation() throws URISyntaxException {
        List<Specialisation> specialisationList = courseDAO.getSpecialisations();
        if(specialisationList != null)  return Response.ok().entity(specialisationList).build();
        return Response.status(400).entity("Failure while fetching specialisation!!").build();
    }

    @GET
    @Path("/getFaculty")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON) //parameter
    public Response getFaculty() throws URISyntaxException {
        List<Employee> employeeList = courseDAO.getFaculty();
        if(employeeList != null) return Response.ok().entity(employeeList).build();
        return Response.status(400).entity("Failure while fetching faculty!!!").build();
    }
}
