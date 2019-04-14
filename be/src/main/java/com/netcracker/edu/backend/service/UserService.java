package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.User;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User findByUserName(String login);
    User save(User user);

    User getUserById(Long id);
    void delete(long id);
}
