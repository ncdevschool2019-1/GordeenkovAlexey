package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.ServiceRepository;
import com.netcracker.edu.backend.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class CatalogServiceImpl implements CatalogService {

    private int itemsPerPage = 2;

    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public List<Service> getCatalog(String type) {
        return (List<Service>) serviceRepository.findAllByType(type);
    }

    @Override
    public Integer getNumberOfServices(String type) {
        return this.serviceRepository.getNumberOfServices(type);
    }

    @Override
    public List<Service> getCatalog(String type, String page) {
        Integer pageNumber = Integer.parseInt(page);
        return (List<Service>) (this.serviceRepository.getServicesOnPage((pageNumber - 1) * this.itemsPerPage, this.itemsPerPage, type));
    }
}
