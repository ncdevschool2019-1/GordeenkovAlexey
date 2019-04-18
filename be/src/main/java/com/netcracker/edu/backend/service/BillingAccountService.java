package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.BillingAccount;

import java.util.Optional;

public interface BillingAccountService {

    Optional<BillingAccount> getBillingAccountById(Long id);

    void deleteBillingAccount(Long id);

    BillingAccount addBillingAccount(BillingAccount account);

    Iterable<BillingAccount> getBillingAccountsByUserId(Long id);

    BillingAccount addMoney(BillingAccount account);

    Double getTotalSum(Long id);

    void withdraw(Long id, double amount);
}
