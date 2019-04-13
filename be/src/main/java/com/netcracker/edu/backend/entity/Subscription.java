package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "subscriptions")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int startDate;
    private int expireDate;


    @ManyToOne
    @JoinColumn(name = "statusId")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "serviceId")
    private Service service;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User userByUserId;

    public Subscription() {
    }

    public Subscription(int startDate, int expireDate, Status status, Service service, User userByUserId) {
        this.startDate = startDate;
        this.expireDate = expireDate;
        this.status = status;
        this.service = service;
        this.userByUserId = userByUserId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getStartDate() {
        return startDate;
    }

    public void setStartDate(int startDate) {
        this.startDate = startDate;
    }

    public int getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(int expireDate) {
        this.expireDate = expireDate;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public User getUserByUserId() {
        return userByUserId;
    }

    public void setUserByUserId(User userByUserId) {
        this.userByUserId = userByUserId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Subscription)) return false;
        Subscription that = (Subscription) o;
        return getStartDate() == that.getStartDate() &&
                getExpireDate() == that.getExpireDate() &&
                Objects.equals(getId(), that.getId()) &&
                Objects.equals(getStatus(), that.getStatus()) &&
                Objects.equals(getService(), that.getService()) &&
                Objects.equals(getUserByUserId(), that.getUserByUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getStartDate(), getExpireDate(), getStatus(), getService(), getUserByUserId());
    }

    @Override
    public String toString() {
        return "Subscription{" +
                "id=" + id +
                ", startDate=" + startDate +
                ", expireDate=" + expireDate +
                ", status=" + status +
                ", service=" + service +
                ", userByUserId=" + userByUserId +
                '}';
    }
}
