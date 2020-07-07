package com.example.controller;

import com.example.lab.Inquiry;
import com.example.lab.Users;
import com.example.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/users")
public class UsersController {

        @Autowired
        private UsersService service;

    @GetMapping("/getAll")
    public List<Users> list() {
        return service.getAllUsers();
    }

    @GetMapping("id/{id}")
    public ResponseEntity<Users> get(@PathVariable Integer id) {
        try {
            Users user = service.getUsersById(id);
            return new ResponseEntity<Users>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Users>(HttpStatus.NOT_FOUND);
        }
    }


    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public Users getUsersByEmail(@RequestBody Users user) {
        return service.getUsersByEmail(user);
    }


    @RequestMapping(path = "/", method = RequestMethod.POST)
    public void save(@RequestBody Users user) {
        service.save(user);
    }

    @RequestMapping(path = "/teacher", method = RequestMethod.POST)
    public Users addTeacher(@RequestBody Users user) {
        return service.addTeacher(user);
    }

    @GetMapping("/getNewUser")
    public List<Users> getNewUser() {
        return service.getNewUser();
    }



}
