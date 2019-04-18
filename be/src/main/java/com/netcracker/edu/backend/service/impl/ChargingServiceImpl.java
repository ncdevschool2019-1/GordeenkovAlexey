package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Status;
import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.ChargingService;
import com.netcracker.edu.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class ChargingServiceImpl implements ChargingService {

    @Autowired
    SubscriptionService subscriptionService;

    @Autowired
    BillingAccountService billingAccountService;

    private static boolean charge;

    public ChargingServiceImpl() {
        charge = true;
    }

    @Override
    public void startCharging() {
        charge = true;
    }

    @Override
    public void stopCharging() {
        charge = false;
    }

    @Scheduled(fixedDelay = 10000)
    private void doCharge() {

        System.out.println("Charge");

        if (charge == true) {
            Subscription subscription = subscriptionService.findTheNearestExpiringSubscription();
            System.out.println(subscription.toString());
            if (subscription.getService().getCost() > billingAccountService.getTotalSum(subscription.getUserId())) {

                subscription.setStatus(new Status("Blocked"));
                subscriptionService.changeSubscriptionStatus(subscription);

            } else {

                billingAccountService.withdraw(subscription.getUserId(), subscription.getService().getCost());
                subscription.charge();

            }
        }
    }

}
