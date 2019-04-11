package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SubscriptionViewModel {
    private int id;
    private int userId;
    private String serviceName;
    private double cost;
    private String status;

    public SubscriptionViewModel(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "SubscriptionViewModel{" +
                "id=" + id +
                ", userId=" + userId +
                ", serviceName='" + serviceName + '\'' +
                ", cost=" + cost +
                ", status='" + status + '\'' +
                '}';
    }

    public SubscriptionViewModel(int id, int userId, String serviceName, double cost, String status) {
        this.id = id;
        this.userId = userId;
        this.serviceName = serviceName;
        this.cost = cost;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

