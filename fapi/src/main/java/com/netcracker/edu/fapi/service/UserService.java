package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.User;
import java.util.List;

public interface UserService {

    User getUserByUserName(String userName);

    User getUserById(Long id);

    List<User> getUsers();

    User save(User user);
}
