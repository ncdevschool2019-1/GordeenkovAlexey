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
    private Long duration;

    @Column(name = "user_id")
    private Long userId;

    public Long getDuration() {
        return duration;
    }

    public void setDuration(Long duration) {
        this.duration = duration;
    }

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;

    public int getTimeLeft() {
        if (status.getName().equals("Active")) return new Long(expireDate - (new Date()).getTime()).intValue();

        return new Long(expireDate - startDate).intValue();
    }

    public void charge() {
        startDate = (new Date()).getTime();
        expireDate = startDate + duration;
    }

    public void pause(Status status) {
        Date date = new Date();
        startDate = date.getTime();
        setStatus(status);
        System.out.println(Math.floor((expireDate - startDate) / 1000));
    }

    public void block(Status status) {
        Date date = new Date();
        startDate = date.getTime();
        setStatus(status);
    }

    public void activate(Status status) {
        Date date = new Date();
        this.expireDate = date.getTime() + this.expireDate - this.startDate;
        this.startDate = date.getTime();
        setStatus(status);
    }


    public Subscription() {
    }

    public Subscription(Long duration, Long userId, Status status, Service service) {
        this.duration = duration;
        this.startDate = (new Date()).getTime();
        this.expireDate = this.startDate + duration;
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
                ", duration=" + duration +
                ", userId=" + userId +
                ", status=" + status +
                ", service=" + service +
                '}';
    }
}
