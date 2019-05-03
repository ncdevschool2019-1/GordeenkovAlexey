package com.netcracker.edu.fapi.Validators.impl;

import com.netcracker.edu.fapi.Validators.RegistrationValidator;
import com.netcracker.edu.fapi.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationValidatorImpl implements RegistrationValidator {
    @Override
    public String validate(User user, List<User> users) {
        for (User value : users) {
            if (value.getUserName().equals(user.getUserName())) {
                return "User with the same username already exists";
            }
        }
        return "ok";
    }
}
