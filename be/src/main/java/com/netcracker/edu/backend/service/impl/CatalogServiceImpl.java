package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.ServiceRepository;
import com.netcracker.edu.backend.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class CatalogServiceImpl implements CatalogService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public List<Service> getCatalog(String type) {
        return (List<Service>) serviceRepository.findAllByType(type);
    }
}
