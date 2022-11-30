package com.example.backend.DAO.impl;

import com.example.backend.util.HibernateSessionUtil;
import com.example.backend.DAO.EmployeeDAO;
import com.example.backend.Bean.Employee;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.ArrayList;
import java.util.List;

public class EmployeeDAOImpl implements EmployeeDAO {
    @Override
    public boolean login(Employee employee) {
        try (Session session = HibernateSessionUtil.getSession()) {

            String sql1 = "select distinct d.departmentId FROM Department d where d.name = :adminName";
            Query query1 = session.createQuery(sql1);
            query1.setParameter("adminName", "admin");
            List deptIdList = query1.list();
            int adminId;
            if(deptIdList.size() == 1){
                adminId = ((int) deptIdList.get(0));
                System.out.println(adminId + "admin ni Id");
            }else return false;

            System.out.println("empDAO above run query");
            List<Object> result =new ArrayList<Object>(
                session.createQuery(
                        "from Employee e where e.employeeDepartment.departmentId = :adminID and e.email = :employeeEmail and e.password = :employeePassword"
                )
                        .setParameter("employeeEmail", employee.getEmail())
                        .setParameter("employeePassword", employee.getPassword())
                        .setParameter("adminID", adminId)
                        .list()
            );
            System.out.println("got first part of employee");
            if(result.size() != 0){
                System.out.println("inside approving employee");
                return true;
            }
            else
                return false;
        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
            return false;
        }
    }

//    @Override
//    public boolean addEmployee(Employee employeeObj){
//        try(Session session = HibernateSessionUtil.getSession()){
//            Transaction transaction = session.beginTransaction();
//            session.save(employeeObj);
//            transaction.commit();
//            return true;
//        }
//        catch (HibernateException exception) {
//            System.out.print(exception.getLocalizedMessage());
//            return false;
//        }
//    }
}
