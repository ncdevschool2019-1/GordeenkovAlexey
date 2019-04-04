package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CatalogViewModel {

    private int id;
    private String name;
    private String text;
    private String img;
    private double cost;
    private String type;

    public CatalogViewModel() {
        id = 5;
        name = "1";
        text = "1";
        img = "1";
        cost = 5;
        type = "music";
    }

    public CatalogViewModel(int id, String name, String text, String img, double cost, String type) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.img = img;
        this.cost = cost;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}


