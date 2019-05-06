package com.netcracker.edu.fapi.controller;


import com.netcracker.edu.fapi.models.SubscriptionViewModel;
import com.netcracker.edu.fapi.service.SubscriptionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/subscriptions")
public class SubscriptionsController {

    @Autowired
    private SubscriptionsService subscriptionsService;

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<SubscriptionViewModel>> getSubscriptionsByUserId(@RequestParam String id, String sort, String trend) {
        return ResponseEntity.ok(subscriptionsService.getSubscriptions(id, sort, trend));
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<SubscriptionViewModel> addSubscription(@RequestBody SubscriptionViewModel subscription) {
        if (subscription != null) {
            return ResponseEntity.ok(subscriptionsService.addSubscription(subscription));
        }
        return ResponseEntity.badRequest().build();
    }

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<SubscriptionViewModel> changeStatus(@PathVariable String id, @RequestBody SubscriptionViewModel subscription) {
        if (subscription != null) {
            subscriptionsService.changeStatus(id, subscription);
            return ResponseEntity.ok(subscription);
        }

        return ResponseEntity.badRequest().build();
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteSubscription(@PathVariable String id) {
        subscriptionsService.deleteSubscription(Long.valueOf(id));
        return ResponseEntity.ok().build();
    }
}
