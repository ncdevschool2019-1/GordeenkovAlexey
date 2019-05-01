package com.netcracker.edu.fapi.models;

public class AuthToken {
    private String token;
    private String login;
    private String role;

    public AuthToken() {
    }

    @Override
    public String toString() {
        return "AuthToken{" +
                "token='" + token + '\'' +
                ", login='" + login + '\'' +
                ", role='" + role + '\'' +
                '}';
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public AuthToken(String token, String login, String role) {
        this.token = token;
        this.login = login;
        this.role = role;
    }
}
