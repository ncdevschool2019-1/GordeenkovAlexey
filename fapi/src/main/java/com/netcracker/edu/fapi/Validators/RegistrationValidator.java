package com.netcracker.edu.fapi.Validators;

import com.netcracker.edu.fapi.models.User;

import java.util.List;

public interface RegistrationValidator {
    String validate(User user, List<User> users);
}
