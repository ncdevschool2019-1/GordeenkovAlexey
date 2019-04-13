package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "firstName")
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private String Email;
    private String phone;

    @ManyToOne
    @JoinColumn(name = "roleId")
    private RoleId role;

    @OneToMany(mappedBy = "userId")
    private List<BillingAccount> billingAccounts;

    @OneToMany(mappedBy = "userId")
    private List<Subscription> subscriptions;



    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", Email='" + Email + '\'' +
                ", phone='" + phone + '\'' +
                ", role=" + role.getName() +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return getId() == user.getId() &&
                Objects.equals(getFirstName(), user.getFirstName()) &&
                Objects.equals(getLastName(), user.getLastName()) &&
                Objects.equals(getUserName(), user.getUserName()) &&
                Objects.equals(getPassword(), user.getPassword()) &&
                Objects.equals(getEmail(), user.getEmail()) &&
                Objects.equals(getPhone(), user.getPhone()) &&
                Objects.equals(getRole(), user.getRole()) &&
                Objects.equals(getBillingAccounts(), user.getBillingAccounts()) &&
                Objects.equals(getSubscriptions(), user.getSubscriptions());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getUserName(), getPassword(), getEmail(), getPhone(), getRole(), getBillingAccounts(), getSubscriptions());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public RoleId getRole() {
        return role;
    }

    public void setRole(RoleId role) {
        this.role = role;
    }

    public List<BillingAccount> getBillingAccounts() {
        return billingAccounts;
    }

    public void setBillingAccounts(List<BillingAccount> billingAccounts) {
        this.billingAccounts = billingAccounts;
    }

    public List<Subscription> getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(List<Subscription> subscriptions) {
        this.subscriptions = subscriptions;
    }

    public User(String firstName, String lastName, String userName, String password, String email, String phone, RoleId role, List<BillingAccount> billingAccounts, List<Subscription> subscriptions) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        Email = email;
        this.phone = phone;
        this.role = role;
        this.billingAccounts = billingAccounts;
        this.subscriptions = subscriptions;
    }

    public User() {
    }
}
