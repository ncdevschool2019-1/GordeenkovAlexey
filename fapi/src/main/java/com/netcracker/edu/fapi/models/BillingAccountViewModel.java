package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class BillingAccountViewModel {
    private Long id;
    private double money;
    private Long userId;


    @Override
    public String toString() {
        return "BillingAccountViewModel{" +
                "id=" + id +
                ", money=" + money +
                ", userId=" + userId +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public BillingAccountViewModel(Long id, double money, Long userId) {
        this.id = id;
        this.money = money;
        this.userId = userId;
    }

    public BillingAccountViewModel() {
    }
}
