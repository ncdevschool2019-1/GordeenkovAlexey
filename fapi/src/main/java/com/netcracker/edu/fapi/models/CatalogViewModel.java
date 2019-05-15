package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CatalogViewModel {

    private Long id;

    private Double cost;
    private String name;
    private String text;
    private String link;
    private Type type;

    public CatalogViewModel() {
    }

    public CatalogViewModel(Long id, Double cost, String name, String text, String link, Type type) {
        this.id = id;
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
        if (!(o instanceof CatalogViewModel)) return false;
        CatalogViewModel that = (CatalogViewModel) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(cost, that.cost) &&
                Objects.equals(name, that.name) &&
                Objects.equals(text, that.text) &&
                Objects.equals(link, that.link) &&
                Objects.equals(type, that.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, cost, name, text, link, type);
    }

    @Override
    public String toString() {
        return "CatalogViewModel{" +
                "id=" + id +
                ", cost=" + cost +
                ", name='" + name + '\'' +
                ", text='" + text + '\'' +
                ", link='" + link + '\'' +
                ", type=" + type +
                '}';
    }
}


