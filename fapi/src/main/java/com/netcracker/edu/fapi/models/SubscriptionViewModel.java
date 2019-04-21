package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SubscriptionViewModel {
    private Long id;
    private Long userId;
    private Long expireDate;
    private Status status;
    private Service service;

    @Override
    public String toString() {
        return "SubscriptionViewModel{" +
                "id=" + id +
                ", userId=" + userId +
                ", expireDate=" + expireDate +
                ", status=" + status +
                ", service=" + service +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SubscriptionViewModel)) return false;
        SubscriptionViewModel that = (SubscriptionViewModel) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getUserId(), that.getUserId()) &&
                Objects.equals(getExpireDate(), that.getExpireDate()) &&
                Objects.equals(getStatus(), that.getStatus()) &&
                Objects.equals(getService(), that.getService());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUserId(), getExpireDate(), getStatus(), getService());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Long expireDate) {
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

    public SubscriptionViewModel(Long id, Long userId, Long expireDate, Status status, Service service) {
        this.id = id;
        this.userId = userId;
        this.expireDate = expireDate;
        this.status = status;
        this.service = service;
    }

    public SubscriptionViewModel() {
    }
}

