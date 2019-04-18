package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.BillingAccount;
import com.netcracker.edu.backend.entity.User;
import com.netcracker.edu.backend.repository.BillingAccountRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
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
        if (repository.findById(account.getId()).isPresent()) {
            BillingAccount tmp = repository.findById(account.getId()).get();
            if (account.getBalance() > tmp.getBalance()) {
                return repository.save(account);
            } else {
                return tmp;
            }
        }
        return null;
    }

    @Override
    public double getTotalSum(Long id) {
        return repository.getBalanceByUserId(id.toString());
    }

    @Override
    public void withdraw(Long id, double amount) {
        Iterable<BillingAccount> accounts = repository.findAllByUserId(id);
        for (BillingAccount account : accounts) {
            if (amount == 0) break;
            if (account.getBalance() >= amount) {
                account.withdraw(amount);
            } else {
                amount -= account.getBalance();
                account.setBalance(0);
            }
        }
    }
}
