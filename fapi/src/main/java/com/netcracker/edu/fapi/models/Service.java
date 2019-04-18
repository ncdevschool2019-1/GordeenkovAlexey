package com.netcracker.edu.fapi.models;

import java.util.Objects;

public class Service {
    private Long id;

    private Double cost;
    private String name;
    private String type;
    private String text;

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", cost=" + cost +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", text='" + text + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Service)) return false;
        Service service = (Service) o;
        return Objects.equals(getId(), service.getId()) &&
                Objects.equals(getCost(), service.getCost()) &&
                Objects.equals(getName(), service.getName()) &&
                Objects.equals(getType(), service.getType()) &&
                Objects.equals(getText(), service.getText());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getCost(), getName(), getType(), getText());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Service(Long id, Double cost, String name, String type, String text) {
        this.id = id;
        this.cost = cost;
        this.name = name;
        this.type = type;
        this.text = text;
    }

    public Service() {
    }
}
