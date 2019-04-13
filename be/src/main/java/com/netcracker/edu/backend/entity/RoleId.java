package com.netcracker.edu.backend.entity;


import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "roles")
public class RoleId {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private short id;

    private String name;

    public RoleId() {
    }

    public RoleId(String name) {
        this.name = name;
    }

    public short getId() {
        return id;
    }

    public void setId(short id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RoleId)) return false;
        RoleId roleId = (RoleId) o;
        return getId() == roleId.getId() &&
                Objects.equals(getName(), roleId.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName());
    }

    @Override
    public String toString() {
        return "RoleId{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
