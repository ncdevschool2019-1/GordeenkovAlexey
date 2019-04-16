package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.ServiceRepository;
import com.netcracker.edu.backend.repository.StatusRepository;
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
    private StatusRepository statusRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private SubscriptionRepository subscriptionRepository;


    @Override
    public List<Subscription> getSubscriptionsByUserId(Long id) {
        return userService.getUserById(id).getSubscriptions();
    }

    @Override
    public Subscription addSubscription(Subscription subscription) {
        subscription.setStatus(statusRepository.findByName("Active"));
        return subscriptionRepository.save(subscription);
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
