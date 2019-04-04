package com.netcracker.edu.fapi.service.impl;


import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import com.netcracker.edu.fapi.models.CatalogViewModel;
import com.netcracker.edu.fapi.service.BillingAccountDataService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import com.netcracker.edu.fapi.service.CatalogService;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@Service
public class CatalogServiceImpl implements CatalogService {

    @Value("${backend.server.url}")
    private String backendServerUrl;


    @Override
    public List<CatalogViewModel> getCatalog(String type) {
        RestTemplate restTemplate = new RestTemplate();
        CatalogViewModel[] catalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog/" + type, CatalogViewModel[].class);
        return catalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(catalogViewModelsResponse);
    }
}
