package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.SubscriptionViewModel;

import java.util.List;

public interface SubscriptionsService {
    List<SubscriptionViewModel> getSubscriptions(int userId);

    SubscriptionViewModel addSubscription(int userId, SubscriptionViewModel subscriptionViewModel);

    void deleteSubscription(int id);
}
