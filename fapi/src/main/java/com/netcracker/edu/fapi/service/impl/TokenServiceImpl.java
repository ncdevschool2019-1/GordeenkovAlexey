package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.AuthToken;
import com.netcracker.edu.fapi.models.User;
import com.netcracker.edu.fapi.security.TokenProvider;
import com.netcracker.edu.fapi.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class TokenServiceImpl implements TokenService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider tokenProvider;

    @Override
    public AuthToken generateToken(User user) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                user.getUserName(),
                user.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = tokenProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return new AuthToken(token, userDetails.getUsername(), userDetails.getAuthorities().toArray()[0].toString());
    }
}
