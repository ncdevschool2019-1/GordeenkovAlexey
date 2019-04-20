package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Status;
import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.StatusRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.ChargingService;
import com.netcracker.edu.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ChargingServiceImpl implements ChargingService {

    @Autowired
    SubscriptionService subscriptionService;

    @Autowired
    StatusRepository statusRepository;

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


        if (charge == true) {
            Subscription subscription = subscriptionService.findTheNearestExpiringSubscription();
            System.out.println(subscription);

            if (subscription != null) {
                System.out.println(2);

                if (subscription.getExpireDate() <= (new Date()).getTime()) {
                    if (subscription.getService().getCost() > billingAccountService.getTotalSum(subscription.getUserId())) {
                        System.out.println(3);
                        subscription.block();
                        subscriptionService.updateSubscription(subscription);

                    } else {
                        System.out.println(4);
                        billingAccountService.withdraw(subscription.getUserId(), subscription.getService().getCost());
                        subscription.charge();
                        subscriptionService.updateSubscription(subscription);

                    }
                }
            }
        }
    }

}
