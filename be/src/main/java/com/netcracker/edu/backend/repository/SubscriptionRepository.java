package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Status;
import com.netcracker.edu.backend.entity.Subscription;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface SubscriptionRepository extends CrudRepository<Subscription, Long> {

    @Query(value = "select * from subscriptions where expire_date=(SELECT min(expire_date) from subscriptions)"
            , nativeQuery = true)
    Subscription findFirstByExpireDate(Status status);
}
