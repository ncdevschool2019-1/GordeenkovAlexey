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

    private Double cost;
    private String name;
    private String type;
    private String text;
    private String link;

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", cost=" + cost +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", text='" + text + '\'' +
                ", link='" + link + '\'' +
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
                Objects.equals(getText(), service.getText()) &&
                Objects.equals(getLink(), service.getLink());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getCost(), getName(), getType(), getText(), getLink());
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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Service(Double cost, String name, String type, String text, String link) {
        this.cost = cost;
        this.name = name;
        this.type = type;
        this.text = text;
        this.link = link;
    }

    public Service() {
    }
}
