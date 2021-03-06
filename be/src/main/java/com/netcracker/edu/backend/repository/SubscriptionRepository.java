package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.Status;
import com.netcracker.edu.backend.entity.Subscription;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface SubscriptionRepository extends CrudRepository<Subscription, Long> {

    @Query(value = "select * from subscriptions where expire_date=" +
            "(SELECT min(expire_date) from subscriptions where status_id = :statusId)"
            , nativeQuery = true)
    Iterable<Subscription> findFirstByExpireDate(@Param(value = "statusId") String statusId);

    Subscription findFirstByUserIdAndService(Long id, Service service);
}
