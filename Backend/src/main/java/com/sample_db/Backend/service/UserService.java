package com.sample_db.Backend.service;

import com.sample_db.Backend.entity.User;
import com.sample_db.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository ur;
    public User CreateUser(User user)
    {
        return ur.save(user);
    }
    public List<User> ListUser()
    {
        return ur.findAll();
    }
    public User findById(int id)
    {
        return ur.findById(id).orElseThrow(() -> new RuntimeException("Not Found"));
    }
    public User editUser(int id,User user)
    {
            User user_value = findById(id);
            user_value.setName(user.getName());
            user_value.setLocation(user.getLocation());
            user_value.setRole(user.getRole());
            user_value.setStatus(user.getStatus());
            return ur.save(user_value);
    }
    public String deleteUser(int id)
    {
        try
        {
            findById(id);
            ur.deleteById(id);
            return "User Deleted";
        }
        catch (Exception e)
        {
            return "Error while deleting";
        }
    }
}