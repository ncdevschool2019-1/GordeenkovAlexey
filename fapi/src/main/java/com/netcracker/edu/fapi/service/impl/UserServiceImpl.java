package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public User getUserByUserName(String userName) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "api/users/username/" + userName, User.class);
    }

    @Override
    public User getUserById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl + "api/users/id/" + id, User.class);
    }

    @Override
    public List<User> getUsers() {
        RestTemplate restTemplate = new RestTemplate();
        User[] usersResponse = restTemplate.getForObject(backendServerUrl + "api/users", User[].class);
        return usersResponse == null ? Collections.emptyList() : Arrays.asList(usersResponse);
    }


    @Override
    public User save(User user) {
        RestTemplate restTemplate = new RestTemplate();
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return restTemplate.postForEntity(backendServerUrl + "api/users", user, User.class).getBody();
    }



}
