package com.example.service;

import com.example.lab.Inquiry;
import com.example.lab.Users;
import com.example.repository.UsersRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsersService {

    @Autowired
    private UsersRepository repository;

    public List<Users> getAllUsers(){
        return repository.getAllUsers();
    }

    public Users getUsersById(int id) {
        return repository.getUsersById(id);
    }

    public Users getUsersByEmail(Users user) {
        return repository.getUsersByEmail(user.getEmail(),user.getPassword());
    }

    public void save(Users user) {
        repository.save(user);
    }
}
