package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CatalogViewModel {

    private Long id;

    private double cost;
    private String name;
    private String type;
    private String text;

    @Override
    public String toString() {
        return "CatalogViewModel{" +
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
        if (!(o instanceof CatalogViewModel)) return false;
        CatalogViewModel that = (CatalogViewModel) o;
        return Double.compare(that.getCost(), getCost()) == 0 &&
                Objects.equals(getId(), that.getId()) &&
                Objects.equals(getName(), that.getName()) &&
                Objects.equals(getType(), that.getType()) &&
                Objects.equals(getText(), that.getText());
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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public CatalogViewModel(Long id, double cost, String name, String type, String text) {
        this.id = id;
        this.cost = cost;
        this.name = name;
        this.type = type;
        this.text = text;
    }

    public CatalogViewModel() {
    }
}


