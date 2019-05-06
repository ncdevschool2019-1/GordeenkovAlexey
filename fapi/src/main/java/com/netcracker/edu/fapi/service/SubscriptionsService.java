package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.SubscriptionViewModel;

import java.util.List;

public interface SubscriptionsService {
    List<SubscriptionViewModel> getSubscriptions(String id, String sort, String trend);

    SubscriptionViewModel addSubscription(SubscriptionViewModel subscriptionViewModel);


    void changeStatus(String id, SubscriptionViewModel subscription);

    void deleteSubscription(Long id);
}
