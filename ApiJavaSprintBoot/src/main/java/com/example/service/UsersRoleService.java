package com.example.service;

import com.example.lab.UsersRole;
import com.example.repository.UsersRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UsersRoleService {

    @Autowired
    private UsersRoleRepository repository;

    public UsersRole insertRole(UsersRole userRole) {
        return repository.InsertRole(userRole.getUsersid(),userRole.getRoleid());
    }


}
