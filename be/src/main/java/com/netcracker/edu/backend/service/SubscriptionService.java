package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Subscription;

import java.util.List;

public interface SubscriptionService {
    List<Subscription> getSubscriptionsByUserId(Long id);

    Subscription addSubscription(Subscription subscription);

    Subscription addSubscription(Long userId, Long serviceId);

    void deleteSubscription(Long id);

    Subscription changeSubscriptionStatus(Subscription subscription);
}
