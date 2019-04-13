package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class BillingAccountViewModel {
    private Long id;
    private double balance;
    private Long userId;


    @Override
    public String toString() {
        return "BillingAccountViewModel{" +
                "id=" + id +
                ", balance=" + balance +
                ", userId=" + userId +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public BillingAccountViewModel(Long id, double money, Long userId) {
        this.id = id;
        this.balance = money;
        this.userId = userId;
    }

    public BillingAccountViewModel() {
        this.id = 1l;
        this.balance = 1l;
        this.userId = 1l;
    }
}
