package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "billingaccount")
public class BillingAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double balance;
    @Column(name = "user_id")
    private Long userId;


    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
        }
    }


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public BillingAccount(double balance, Long userId) {
        this.balance = balance;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }



    public BillingAccount() {
    }

    @Override
    public String toString() {
        return "BillingAccount{" +
                "id=" + id +
                ", balance=" + balance +
                ", userId=" + userId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof BillingAccount)) return false;
        BillingAccount that = (BillingAccount) o;
        return getId() == that.getId() &&
                Double.compare(that.getBalance(), getBalance()) == 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getBalance());
    }
}
