package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "billingaccount")
public class BillingAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double balance;
    @Column(name = "user_id")
    private int userId;


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



    public BillingAccount() {
    }

    @Override
    public String toString() {
        return "BillingAccount{" +
                "id=" + id +
                ", balance=" + balance +
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
