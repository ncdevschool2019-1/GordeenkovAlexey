package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.BillingAccount;
import com.netcracker.edu.backend.service.BillingAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/billing-accounts")
public class BillingAccountController {

    @Autowired
    private BillingAccountService billingAccountService;

    public BillingAccountController(BillingAccountService billingAccountService) {
        this.billingAccountService = billingAccountService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Iterable<BillingAccount> getBillingAccountsByUserId(@PathVariable(name = "id") Long id) {
        return billingAccountService.getBillingAccountsByUserId(id);
    }

    @RequestMapping(value = "balance/{id}", method = RequestMethod.GET)
    public Double getTotalBalance(@PathVariable(name = "id") Long id) {
        return billingAccountService.getTotalSum(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public BillingAccount saveBillingAccount(@RequestBody BillingAccount account) {
        return billingAccountService.addBillingAccount(account);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteBillingAccount(@PathVariable(name = "id") Long id) {
        billingAccountService.deleteBillingAccount(id);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public BillingAccount addMoney(@PathVariable(name = "id") Long id, @RequestBody BillingAccount account) {
        return billingAccountService.addMoney(account);
    }
}
