package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Subscription;

import java.util.List;

public interface SubscriptionService {
    List<Subscription> getSubscriptionsByUserId(Long id);

    Subscription addSubscription(Subscription subscription);

    void deleteSubscription(Long id);

    Subscription changeSubscriptionStatus(Subscription subscription);

    Subscription findTheNearestExpiringSubscription();

    Subscription updateSubscription(Subscription subscription);
}
