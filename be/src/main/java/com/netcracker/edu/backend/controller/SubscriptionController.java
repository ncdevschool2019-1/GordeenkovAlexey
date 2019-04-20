package com.netcracker.edu.backend.controller;


import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;
    @Autowired
    private BillingAccountService billingAccountService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Iterable<Subscription> getSubscriptionsByUserId(@PathVariable(name = "id") Long id) {
        return subscriptionService.getSubscriptionsByUserId(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Subscription> saveSubscription(@RequestBody Subscription subscription) {
        if (subscription.getService().getCost() > billingAccountService.getTotalSum(subscription.getUserId())
                || subscriptionService.getSubscriptionByUserIdAndService(subscription.getUserId(), subscription.getService()) != null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(subscriptionService.addSubscription(subscription));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSubscription(@PathVariable(name = "id") Long id) {
        subscriptionService.deleteSubscription(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Subscription changeStatus(@RequestBody Subscription subscription) {
        return subscriptionService.changeSubscriptionStatus(subscription);
    }
}
