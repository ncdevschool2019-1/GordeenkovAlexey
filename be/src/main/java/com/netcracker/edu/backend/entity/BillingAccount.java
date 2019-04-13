package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "billing_account")
public class BillingAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double balance;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User userByUserId;


    public BillingAccount(double balance) {
        this.balance = balance;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public User getUserByUserId() {
        return userByUserId;
    }

    public void setUserByUserId(User userByUserId) {
        this.userByUserId = userByUserId;
    }

    public BillingAccount() {
    }

    @Override
    public String toString() {
        return "BillingAccount{" +
                "id=" + id +
                ", balance=" + balance +
                ", userByUserId=" + userByUserId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof BillingAccount)) return false;
        BillingAccount that = (BillingAccount) o;
        return getId() == that.getId() &&
                Double.compare(that.getBalance(), getBalance()) == 0 &&
                getUserByUserId().equals(that.getUserByUserId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getBalance(), getUserByUserId());
    }
}
