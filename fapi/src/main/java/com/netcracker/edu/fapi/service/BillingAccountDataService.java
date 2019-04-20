package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BillingAccountDataService {


    List<BillingAccountViewModel> getBillingAccountsByUserId(Long id);

    Double getTotalBalance(Long id);

    BillingAccountViewModel addBillingAccount(BillingAccountViewModel account);

    void addMoney(BillingAccountViewModel account, String id);

    void deleteBillingAccount(Long id);
}
