package com.netcracker.edu.backend.entity;

import org.springframework.data.annotation.TypeAlias;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double cost;
    private String name;
    private String type;

    public Service() {
    }

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", cost=" + cost +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Service)) return false;
        Service service = (Service) o;
        return Double.compare(service.getCost(), getCost()) == 0 &&
                Objects.equals(getId(), service.getId()) &&
                Objects.equals(getName(), service.getName()) &&
                Objects.equals(getType(), service.getType());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getCost(), getName(), getType());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Service(double cost, String name, String type) {
        this.cost = cost;
        this.name = name;
        this.type = type;
    }
}
