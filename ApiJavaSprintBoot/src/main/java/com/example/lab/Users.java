package com.example.lab;

import javax.persistence.*;

@Entity
@Table(name="Users")
@NamedStoredProcedureQuery( name="Users.getAllUsers",
        procedureName = "SelectUsers")
@NamedStoredProcedureQuery( name = "Users.getUsersById",
        procedureName = "SelectUsersById",
        parameters = {@StoredProcedureParameter(
                mode = ParameterMode.IN,
                name = "@Users_id",
                type = Integer.class)})
@NamedStoredProcedureQuery( name = "Users.getUsersByEmail",
        procedureName = "SelectUsersByEmail",
        parameters = {
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = "@Email",
                        type = String.class),
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = "@Password",
                        type = String.class)})
@NamedStoredProcedureQuery( name = "Users.postTeacher",
        procedureName = "InsertTeacher",
        parameters = {
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = "@Name",
                        type = String.class),
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = "@Lastname",
                        type = String.class),
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = "@Email",
                        type = String.class),
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = "@Password",
                        type = String.class)})

public class Users {

    private int usersId;
    private String name;
    private String lastname;
    private String email;
    private String password;

    public Users() {
    }

    public Users(int usersId, String name, String lastname, String email, String password) {
        this.usersId = usersId;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getUsersId() {
        return usersId;
    }

    public void setUsersId(int usersId) {
        this.usersId = usersId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
