package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import com.netcracker.edu.fapi.service.BillingAccountDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/billing-accounts")
public class BillingAccountDataController {

    @Autowired
    private BillingAccountDataService billingAccountDataService;


    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<BillingAccountViewModel>> getBillingAccountsByUserId(@PathVariable String id) {
        return ResponseEntity.ok(billingAccountDataService.getBillingAccountsByUserId(id));
    }

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(value = "balance/{id}", method = RequestMethod.GET)
    public ResponseEntity<Double> getTotalBalance(@PathVariable String id) {
        return ResponseEntity.ok(billingAccountDataService.getTotalBalance(id));
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BillingAccountViewModel> addBillingAccount(@RequestBody BillingAccountViewModel billingAccount /*todo server validation*/) {
        if (billingAccount != null) {
            return ResponseEntity.ok(billingAccountDataService.addBillingAccount(billingAccount));
        }
        return ResponseEntity.badRequest().build();
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<BillingAccountViewModel> addMoney(@PathVariable String id, @RequestBody BillingAccountViewModel billingAccount) {
        if (billingAccount != null) {
            billingAccountDataService.addMoney(billingAccount, id);
            return ResponseEntity.ok(billingAccount);
        }

        return ResponseEntity.badRequest().build();
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteBillingAccount(@PathVariable String id) {
        billingAccountDataService.deleteBillingAccount(id);
        return ResponseEntity.ok().build();
    }

}
