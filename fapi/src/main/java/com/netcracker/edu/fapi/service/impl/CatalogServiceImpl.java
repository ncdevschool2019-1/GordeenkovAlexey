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
        CatalogViewModel[] catalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog/type/" + type, CatalogViewModel[].class);
        return catalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(catalogViewModelsResponse);
    }

    @Override
    public List<CatalogViewModel> getCatalog(String type, String page) {
        RestTemplate restTemplate = new RestTemplate();
        CatalogViewModel[] catalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog?type=" + type + "&page=" + page, CatalogViewModel[].class);
        return catalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(catalogViewModelsResponse);
    }

    @Override
    public Integer getNumberOfPages(String type) {
        RestTemplate restTemplate = new RestTemplate();
        Integer res = restTemplate.getForObject(backendServerUrl + "api/catalog/pages/" + type, Integer.class);
        return res == null ? 0 : res;
    }
}
