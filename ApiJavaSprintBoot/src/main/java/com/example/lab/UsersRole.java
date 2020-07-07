package com.example.lab;

import javax.persistence.*;

@Entity
@Table(name="UsersRole")
@NamedStoredProcedureQuery(
        name = "UsersRole.InsertRole",
        procedureName = "InsertRole",
        parameters = {
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = "@Users_id",
                        type = Integer.class),
                @StoredProcedureParameter(
                        mode = ParameterMode.IN,
                        name = " @Role_id",
                        type = Integer.class)})
public class UsersRole {


    private int usersroleId;
    private int usersid;
    private int roleid;

    public UsersRole() {
    }

    public UsersRole(int usersroleId, int usersid, int roleid) {
        this.usersroleId = usersroleId;
        this.usersid = usersid;
        this.roleid = roleid;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getUsersroleId() {
        return usersroleId;
    }

    public void setUsersroleId(int usersroleId) {
        this.usersroleId = usersroleId;
    }

    public int getUsersid() {
        return usersid;
    }

    public void setUsersid(int usersid) {
        this.usersid = usersid;
    }

    public int getRoleid() {
        return roleid;
    }

    public void setRoleid(int roleid) {
        this.roleid = roleid;
    }
}
