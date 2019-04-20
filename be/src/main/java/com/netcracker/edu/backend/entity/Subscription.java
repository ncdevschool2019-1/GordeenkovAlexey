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
    private Long startDate;
    private Long expireDate;

    @Column(name = "user_id")
    private Long userId;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;


    public void charge() {
        long tmp = expireDate - startDate;
        startDate = (new Date()).getTime();
        expireDate = startDate + tmp;
    }

    public void pause() {
        Date date = new Date();
        startDate = date.getTime();
        status.setId((short) 2);
        status.setName("Paused");
    }

    public void block() {
        Date date = new Date();
        status.setId((short) 3);
        status.setName("Blocked");
        System.out.println(this);
    }

    public void activate() {
        Date date = new Date();
        this.startDate += date.getTime();
        this.expireDate += date.getTime();

        status.setId((short) 3);
        status.setName("Active");
    }


    public Subscription() {
    }

    public Subscription(Long expireDate, Long userId, Status status, Service service) {
        this.startDate = (new Date()).getTime();
        this.expireDate = this.startDate + expireDate;
        this.userId = userId;
        this.status = status;
        this.service = service;
    }

    public Subscription(Long startDate, Long expireDate, Long userId, Status status, Service service) {
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

    public Long getStartDate() {
        return startDate;
    }

    public void setStartDate(Long startDate) {
        this.startDate = startDate;
    }

    public Long getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Long expireDate) {
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
