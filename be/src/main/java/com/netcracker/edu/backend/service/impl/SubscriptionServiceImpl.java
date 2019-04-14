package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.ServiceRepository;
import com.netcracker.edu.backend.repository.SubscriptionRepository;
import com.netcracker.edu.backend.service.SubscriptionService;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private UserService userService;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    ServiceRepository serviceRepository;

    @Override
    public List<Subscription> getSubscriptionsByUserId(Long id) {
        return userService.getUserById(id).getSubscriptions();
    }

    @Override
    public Subscription addSubscription(Subscription subscription) {
        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription addSubscription(Long userId, Long serviceId) {
        Subscription subscription = new Subscription(
        );
        subscription.setUserId(userId);
        subscription.setService(serviceRepository.findById(serviceId).get());


        return null;
    }

    @Override
    public void deleteSubscription(Long id) {
        subscriptionRepository.deleteById(id);
    }

    @Override
    public Subscription changeSubscriptionStatus(Subscription subscription) {
        Subscription tmp = subscriptionRepository.findById(subscription.getId()).get();
        tmp.setStatus(subscription.getStatus());
        return subscriptionRepository.save(tmp);
    }
}
