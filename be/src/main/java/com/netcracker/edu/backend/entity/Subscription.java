package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "subscriptions")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long startDate;
    private long expireDate;

    @Column(name = "user_id")
    private Long userId;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;


    public void charge() {
        long tmp = expireDate;
        expireDate += expireDate - startDate;
        startDate = tmp;
    }

    public void pause() {
        Date date = new Date();
        startDate = date.getTime();
        status = new Status("Paused");
    }

    public void block() {
        Date date = new Date();
        startDate = date.getTime();
        status = new Status("Blocked");
    }

    public void activate() {
        Date date = new Date();
        this.startDate += date.getTime();
        this.expireDate += date.getTime();
        status = new Status("Active");
    }


    public Subscription() {
    }

    public Subscription(long expireDate, Long userId, Status status, Service service) {
        this.startDate = (new Date()).getTime();
        this.expireDate = this.startDate + expireDate;
        this.userId = userId;
        this.status = status;
        this.service = service;
    }

    public Subscription(long startDate, long expireDate, Long userId, Status status, Service service) {
        this.startDate = startDate;
        this.expireDate = expireDate;
        this.userId = userId;
        this.status = status;
        this.service = service;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getStartDate() {
        return startDate;
    }

    public void setStartDate(long startDate) {
        this.startDate = startDate;
    }

    public long getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(long expireDate) {
        this.expireDate = expireDate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Subscription)) return false;
        Subscription that = (Subscription) o;
        return getStartDate() == that.getStartDate() &&
                getExpireDate() == that.getExpireDate() &&
                Objects.equals(getId(), that.getId()) &&
                Objects.equals(getUserId(), that.getUserId()) &&
                Objects.equals(getStatus(), that.getStatus()) &&
                Objects.equals(getService(), that.getService());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getStartDate(), getExpireDate(), getUserId(), getStatus(), getService());
    }

    @Override
    public String toString() {
        return "Subscription{" +
                "id=" + id +
                ", startDate=" + startDate +
                ", expireDate=" + expireDate +
                ", userId=" + userId +
                ", status=" + status +
                ", service=" + service +
                '}';
    }
}
