package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.AuthToken;
import com.netcracker.edu.fapi.models.User;

public interface TokenService {
    AuthToken generateToken(User user);
}
