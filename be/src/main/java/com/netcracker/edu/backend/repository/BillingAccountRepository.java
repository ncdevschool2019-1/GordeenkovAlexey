package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.BillingAccount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface BillingAccountRepository extends CrudRepository<BillingAccount, Long> {

    @Query(value = "SELECT SUM(balance) from billingaccount where user_id = ?1", nativeQuery = true)
    double getBalanceByUserId(String id);

    Iterable<BillingAccount> findAllByUserId(Long id);
}
