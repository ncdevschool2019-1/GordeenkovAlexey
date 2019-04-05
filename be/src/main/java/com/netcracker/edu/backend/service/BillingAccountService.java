package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.BillingAccount;

import java.util.Optional;

public interface BillingAccountService {

    BillingAccount saveBillingAccount(BillingAccount account);
    Optional<BillingAccount> getBillingAccountById(Long id);
    Iterable<BillingAccount> getAllBillingAccounts();
    void deleteBillingAccount(Long id);

    BillingAccount addBillingAccount(BillingAccount account);

    Iterable<BillingAccount> getBillingAccountsByUserId(Long id);

    BillingAccount addMoney(BillingAccount account);
}
