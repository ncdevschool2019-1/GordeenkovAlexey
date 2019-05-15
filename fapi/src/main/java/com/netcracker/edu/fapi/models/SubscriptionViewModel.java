package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SubscriptionViewModel {
    private Long id;
    private Long userId;
    private Long expireDate;
    private Long startDate;
    private Status status;
    private CatalogViewModel service;

    public SubscriptionViewModel() {
    }

    public SubscriptionViewModel(Long id, Long userId, Long expireDate, Long startDate, Status status, CatalogViewModel service) {
        this.id = id;
        this.userId = userId;
        this.expireDate = expireDate;
        this.startDate = startDate;
        this.status = status;
        this.service = service;
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

    public Long getStartDate() {
        return startDate;
    }

    public void setStartDate(Long startDate) {
        this.startDate = startDate;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public CatalogViewModel getService() {
        return service;
    }

    public void setService(CatalogViewModel service) {
        this.service = service;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SubscriptionViewModel)) return false;
        SubscriptionViewModel that = (SubscriptionViewModel) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(userId, that.userId) &&
                Objects.equals(expireDate, that.expireDate) &&
                Objects.equals(startDate, that.startDate) &&
                Objects.equals(status, that.status) &&
                Objects.equals(service, that.service);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, expireDate, startDate, status, service);
    }

    @Override
    public String toString() {
        return "SubscriptionViewModel{" +
                "id=" + id +
                ", userId=" + userId +
                ", expireDate=" + expireDate +
                ", startDate=" + startDate +
                ", status=" + status +
                ", service=" + service +
                '}';
    }
}

