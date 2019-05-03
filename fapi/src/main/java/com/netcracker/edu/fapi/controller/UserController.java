package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.Validators.RegistrationValidator;
import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private RegistrationValidator registrationValidator;

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(value = "/username/{userName}", method = RequestMethod.GET)
    public ResponseEntity<User> getUserByUserName(@PathVariable String userName) {
        return ResponseEntity.ok(userService.getUserByUserName(userName));
    }

    @PreAuthorize("hasRole('Admin')")
    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> getUserByUserId(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUserById(Long.valueOf(id)));
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity saveUser(@RequestBody User user) {
        String answer = registrationValidator.validate(user, userService.getUsers());
        if (user != null && answer.equals("ok")) {
            return ResponseEntity.ok(userService.save(user));
        }
        return ResponseEntity.badRequest().body(answer);
    }

}

