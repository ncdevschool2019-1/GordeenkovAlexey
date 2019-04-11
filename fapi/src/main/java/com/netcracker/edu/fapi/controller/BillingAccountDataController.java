package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import com.netcracker.edu.fapi.service.BillingAccountDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/billing-accounts")
public class BillingAccountDataController {

    @Autowired
    private BillingAccountDataService billingAccountDataService;


    /*   @RequestMapping(value = "/{id}", method = RequestMethod.GET)
       public ResponseEntity<List<BillingAccountViewModel>> getBillingAccountsByUserId(@PathVariable String id) {
           return ResponseEntity.ok(billingAccountDataService.getBillingAccountsByUserId(Long.valueOf(id)));
       }
   */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<BillingAccountViewModel> getBillingAccountsByUserId(@PathVariable String id) {
        List<BillingAccountViewModel> list = new ArrayList<>();
        list.add(new BillingAccountViewModel());
        return list;
    }


    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BillingAccountViewModel> addBillingAccount(@RequestBody BillingAccountViewModel billingAccount /*todo server validation*/) {
        if (billingAccount != null) {
            return ResponseEntity.ok(billingAccountDataService.addBillingAccount(billingAccount));
        }
        return ResponseEntity.badRequest().build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<BillingAccountViewModel> addMoney(@PathVariable String id, @RequestBody BillingAccountViewModel billingAccount) {
           if (billingAccount != null) {
               billingAccountDataService.addMoney(billingAccount, id);
               return ResponseEntity.ok(billingAccount);
           }

        return ResponseEntity.badRequest().build();
       }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteBillingAccount(@PathVariable String id) {
        billingAccountDataService.deleteBillingAccount(Long.valueOf(id));
        return ResponseEntity.ok().build();
    }

}
