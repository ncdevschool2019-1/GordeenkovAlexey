package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.SubscriptionViewModel;
import com.netcracker.edu.fapi.service.SubscriptionsService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class SubscriptionsServiceImpl implements SubscriptionsService {

    @Value("${backend.server.url}")
    private String backendServerUrl;


    @Override
    public List<SubscriptionViewModel> getSubscriptions(String id, String sort, String trend) {
        RestTemplate restTemplate = new RestTemplate();
        SubscriptionViewModel[] subscriptionViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/subscriptions?id=" + id + "&sort=" + sort + "&trend=" + trend, SubscriptionViewModel[].class);
        return subscriptionViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(subscriptionViewModelsResponse);
    }

    @Override
    public SubscriptionViewModel addSubscription(SubscriptionViewModel subscription) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity subscriptionViewModelResponse = restTemplate.postForEntity(backendServerUrl + "api/subscriptions/", subscription, SubscriptionViewModel.class);
        if (subscriptionViewModelResponse.getStatusCode().is2xxSuccessful()) {
            return (SubscriptionViewModel) subscriptionViewModelResponse.getBody();
        }
        return null;
    }

    @Override
    public void changeStatus(String id, SubscriptionViewModel subscription) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.put(backendServerUrl + "api/subscriptions/" + id, subscription, SubscriptionViewModel.class);
    }

    @Override
    public void deleteSubscription(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "api/subscriptions/" + id);
    }
}
