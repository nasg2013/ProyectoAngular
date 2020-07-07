package com.example.repository;

import com.example.lab.UsersRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsersRoleRepository extends JpaRepository<UsersRole, Integer> {

    @Query(value = "{ call InsertRole(:usersid,:roleid)}", nativeQuery = true)
    UsersRole InsertRole(@Param("usersid") Integer usersid, @Param("roleid") Integer roleid);
}
