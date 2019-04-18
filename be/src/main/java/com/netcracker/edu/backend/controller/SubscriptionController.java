package com.netcracker.edu.backend.controller;


import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Iterable<Subscription> getSubscriptionsByUserId(@PathVariable(name = "id") Long id) {
        return subscriptionService.getSubscriptionsByUserId(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Subscription saveSubscription(@RequestBody Subscription subscription) {
        return subscriptionService.addSubscription(subscription);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSubscription(@PathVariable(name = "id") Long id) {
        subscriptionService.deleteSubscription(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Subscription changeStatus(@RequestBody Subscription subscription) {
        return subscriptionService.changeSubscriptionStatus(subscription);
    }
}
