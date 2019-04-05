package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BillingAccountDataService {


    List<BillingAccountViewModel> getBillingAccountsByUserId(Long id);

    BillingAccountViewModel addBillingAccount(BillingAccountViewModel account);

    BillingAccountViewModel addMoney(BillingAccountViewModel account);
    void deleteBillingAccount(Long id);
}
