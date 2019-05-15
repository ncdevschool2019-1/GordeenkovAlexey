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
    private String text;
    private String link;


    @ManyToOne
    @JoinColumn(name = "typeId")
    private Type type;

    public Service() {
    }

    public Service(Double cost, String name, String text, String link, Type type) {
        this.cost = cost;
        this.name = name;
        this.text = text;
        this.link = link;
        this.type = type;
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

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Service)) return false;
        Service service = (Service) o;
        return Objects.equals(id, service.id) &&
                Objects.equals(cost, service.cost) &&
                Objects.equals(name, service.name) &&
                Objects.equals(text, service.text) &&
                Objects.equals(link, service.link) &&
                Objects.equals(type, service.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, cost, name, text, link, type);
    }

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", cost=" + cost +
                ", name='" + name + '\'' +
                ", text='" + text + '\'' +
                ", link='" + link + '\'' +
                ", type=" + type +
                '}';
    }
}
