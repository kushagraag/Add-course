package com.example.backend.DAO.impl;

import com.example.backend.Bean.Specialisation;
import com.example.backend.DAO.SpecialisationDAO;

import com.example.backend.util.HibernateSessionUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class SpecialisationDAOImpl implements SpecialisationDAO {

    @Override
    public boolean addSpecialisation(Specialisation specialisationObj){
        try(Session session = HibernateSessionUtil.getSession()){
            Transaction transaction = session.beginTransaction();
            session.persist(specialisationObj);
            transaction.commit();
            return true;
        }
        catch (HibernateException exception) {
            System.out.println("Hibernate Exception");
            System.out.print(exception.getLocalizedMessage());
            return false;
        }
    }
}
