package com.example.controller;

import com.example.lab.Users;
import com.example.lab.UsersRole;
import com.example.service.UsersRoleService;
import com.example.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/role")
public class UsersRoleController {

    @Autowired
    private UsersRoleService service;

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public UsersRole insertRole(@RequestBody UsersRole usersRole) {
        return service.insertRole(usersRole);
    }

}
