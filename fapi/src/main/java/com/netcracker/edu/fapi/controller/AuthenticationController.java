package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.AuthService;
import com.netcracker.edu.fapi.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private TokenService tokenService;
    @Autowired
    private AuthService authService;


    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody User user) {
        if (authService.authenticate(user)) {
            return ResponseEntity.ok(this.tokenService.generateToken(user));
        }
        return ResponseEntity.badRequest().body("Incorrect UserName or Password");
    }



}
