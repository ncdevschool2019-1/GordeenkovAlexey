package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Status;
import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.ServiceRepository;
import com.netcracker.edu.backend.repository.StatusRepository;
import com.netcracker.edu.backend.repository.SubscriptionRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.StatusService;
import com.netcracker.edu.backend.service.SubscriptionService;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.ConcurrentModificationException;
import java.util.List;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private UserService userService;
    @Autowired
    private StatusService statusService;
    @Autowired
    private BillingAccountService billingAccountService;

    @Autowired
    private SubscriptionRepository subscriptionRepository;


    @Override
    public List<Subscription> getSubscriptionsByUserId(Long id, String compareBy, String trend) {

        int tr = trend.equals("up") ? 1 : -1;
        Comparator<Subscription> comparator;

        switch (compareBy) {
            case "byCost": {
                comparator = new Comparator<Subscription>() {
                    @Override
                    public int compare(Subscription o1, Subscription o2) {
                        return tr * (new Long(Math.round((o1.getService().getCost() - o2.getService().getCost()) * 100)).intValue());
                    }
                };
                break;
            }
            case "byStatus": {
                comparator = new Comparator<Subscription>() {
                    @Override
                    public int compare(Subscription o1, Subscription o2) {
                        return tr * o1.getStatus().getName().compareTo(o2.getStatus().getName());
                    }
                };
                break;
            }
            case "byTimeLeft": {
                comparator = new Comparator<Subscription>() {
                    @Override
                    public int compare(Subscription o1, Subscription o2) {
                        return tr * ((o1.getTimeLeft() - o2.getTimeLeft()));
                    }
                };

                break;
            }
            default: {
                comparator = new Comparator<Subscription>() {
                    @Override
                    public int compare(Subscription o1, Subscription o2) {
                        return tr * o1.getService().getName().compareTo(o2.getService().getName());
                    }
                };
                break;
            }
        }
        userService.getUserById(id).getSubscriptions().sort(comparator);
        return userService.getUserById(id).getSubscriptions();
    }

    @Override
    public Subscription getSubscriptionById(Long id) {
        return subscriptionRepository.findById(id).get();
    }

    @Override
    public Subscription getSubscriptionByUserIdAndService(Long id, com.netcracker.edu.backend.entity.Service service) {
        return subscriptionRepository.findFirstByUserIdAndService(id, service);
    }


    @Override
    public Subscription addSubscription(Subscription subscription) {
        Subscription tmp =
                new Subscription(60000l, subscription.getUserId(),
                        statusService.getStatus("Active"), subscription.getService());
        billingAccountService.withdraw(tmp.getUserId(), tmp.getService().getCost());
        return subscriptionRepository.save(tmp);
    }


    @Override
    public void deleteSubscription(Long id) {
        subscriptionRepository.deleteById(id);
    }

    @Override
    public Subscription changeSubscriptionStatus(Subscription subscription) {
        Subscription tmp = subscriptionRepository.findById(subscription.getId()).get();
        switch (subscription.getStatus().getName()) {
            case "Active":
                tmp.activate(subscription.getStatus());
                break;
            case "Paused":
                tmp.pause(subscription.getStatus());
                break;
            default:
                tmp.block(subscription.getStatus());
                break;
        }
        return subscriptionRepository.save(tmp);
    }


    public Iterable<Subscription> findTheNearestExpiringSubscription() {

        return subscriptionRepository.findFirstByExpireDate(
                String.valueOf(statusService.getStatus("Active").getId()));
    }

    @Override
    public Subscription updateSubscription(Subscription subscription) {
        return subscriptionRepository.save(subscription);
    }
}
