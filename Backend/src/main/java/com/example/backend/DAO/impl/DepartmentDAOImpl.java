package com.example.backend.DAO.impl;

import com.example.backend.Bean.Department;
import com.example.backend.DAO.DepartmentDAO;
import com.example.backend.util.HibernateSessionUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
//
//public class DepartmentDAOImpl implements DepartmentDAO {
//
//    @Override
////    public boolean addDepartment(Department departmentObj){
////        try(Session session = HibernateSessionUtil.getSession()){
////            Transaction transaction = session.beginTransaction();
////            session.save(departmentObj);
////            transaction.commit();
////            return true;
////        }
////        catch (HibernateException exception) {
////            System.out.println("Hibernate Exception");
////            System.out.print(exception.getLocalizedMessage());
////            return false;
////        }
//    }
//}
