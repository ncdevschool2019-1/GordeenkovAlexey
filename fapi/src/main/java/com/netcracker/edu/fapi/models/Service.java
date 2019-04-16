package com.netcracker.edu.fapi.models;

import java.util.Objects;

public class Service {
    Long id;
    String name;
    int expireDate;
    double cost;

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", expireDate=" + expireDate +
                ", cost=" + cost +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Service)) return false;
        Service service = (Service) o;
        return getExpireDate() == service.getExpireDate() &&
                Double.compare(service.getCost(), getCost()) == 0 &&
                Objects.equals(getId(), service.getId()) &&
                Objects.equals(getName(), service.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getExpireDate(), getCost());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(int expireDate) {
        this.expireDate = expireDate;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public Service(Long id, String name, int expireDate, double cost) {
        this.id = id;
        this.name = name;
        this.expireDate = expireDate;
        this.cost = cost;
    }

    public Service() {
    }
}
