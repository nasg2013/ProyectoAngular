package com.example.repository;

import com.example.lab.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsersRepository extends JpaRepository<Users, Integer> {

    @Query(value="SelectUsers", nativeQuery = true)
    List<Users> getAllUsers();

    @Query(value = "{ call SelectUsersById(:Users_id)}", nativeQuery = true)
    Users getUsersById(@Param("Users_id") Integer usersId);

    @Query(value = "{ call SelectUsersByEmail(:email,:password)}", nativeQuery = true)
    Users getUsersByEmail(@Param("email") String email,@Param("password") String password);

}
