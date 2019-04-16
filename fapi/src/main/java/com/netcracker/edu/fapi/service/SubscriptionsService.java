package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.SubscriptionViewModel;

import java.util.List;

public interface SubscriptionsService {
    List<SubscriptionViewModel> getSubscriptions(Long userId);

    SubscriptionViewModel addSubscription(Long userId, SubscriptionViewModel subscriptionViewModel);

    void deleteSubscription(Long id);
}
