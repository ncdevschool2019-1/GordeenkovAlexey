package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.User;

public interface AuthService {
    boolean authenticate(User frontendUser);
}
