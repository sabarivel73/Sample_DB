package com.sample_db.Backend.controller;

import com.sample_db.Backend.entity.User;
import com.sample_db.Backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService us;
    @PostMapping
    public ResponseEntity<User> CreateUser(@RequestBody @Valid User user)
    {
        return new ResponseEntity<>(us.CreateUser(user), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<User>> ListUsers()
    {
        return new ResponseEntity<>(us.ListUser(),HttpStatus.OK);
    }
    @PutMapping("/{uid}")
    public ResponseEntity<User>editUser(@PathVariable int uid,@RequestBody @Valid User user)
    {
        return new ResponseEntity<>(us.editUser(uid,user),HttpStatus.OK);
    }
    @DeleteMapping("/{uid}")
    public ResponseEntity<String> deleteUser(@PathVariable int uid)
    {
        return new ResponseEntity<>(us.deleteUser(uid),HttpStatus.OK);
    }
}
