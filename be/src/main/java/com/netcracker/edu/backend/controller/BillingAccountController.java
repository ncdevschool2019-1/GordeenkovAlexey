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

    @RequestMapping(method = RequestMethod.POST)
    public BillingAccount saveBillingAccount(@RequestBody BillingAccount account) {
        return billingAccountService.addBillingAccount(account);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteBillingAccount(@PathVariable(name = "id") Long id) {
        billingAccountService.deleteBillingAccount(id);
    }

}
