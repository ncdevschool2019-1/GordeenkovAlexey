package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.Subscription;

import java.util.List;

public interface SubscriptionService {
    List<Subscription> getSubscriptionsByUserId(Long id);

    Subscription getSubscriptionById(Long id);

    Subscription getSubscriptionByUserIdAndService(Long id, Service service);

    Subscription addSubscription(Subscription subscription);

    void deleteSubscription(Long id);

    Subscription changeSubscriptionStatus(Subscription subscription);

    Subscription findTheNearestExpiringSubscription();

    Subscription updateSubscription(Subscription subscription);
}
