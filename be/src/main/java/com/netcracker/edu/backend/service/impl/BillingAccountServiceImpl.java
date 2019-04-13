package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.BillingAccount;
import com.netcracker.edu.backend.entity.User;
import com.netcracker.edu.backend.repository.BillingAccountRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BillingAccountServiceImpl implements BillingAccountService {

    private BillingAccountRepository repository;

    @Autowired
    public BillingAccountServiceImpl(BillingAccountRepository repository) {
        this.repository = repository;
    }

    @Autowired
    private UserService userService;

    @Override
    public Optional<BillingAccount> getBillingAccountById(Long id) {
        return repository.findById(id);
    }


    @Override
    public void deleteBillingAccount(Long id) {
        repository.deleteById(id);
    }

    @Override
    public BillingAccount addBillingAccount(BillingAccount account) {
        return repository.save(account);
    }

    @Override
    public Iterable<BillingAccount> getBillingAccountsByUserId(Long id) {
        return userService.getUserById(id).getBillingAccounts();
    }

    @Override
    public BillingAccount addMoney(BillingAccount account) {
        return null;
    }
}
