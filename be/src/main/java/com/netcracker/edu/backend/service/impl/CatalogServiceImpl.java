package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.ServiceRepository;
import com.netcracker.edu.backend.repository.TypeRepository;
import com.netcracker.edu.backend.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class CatalogServiceImpl implements CatalogService {


    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    private TypeRepository typeRepository;

    @Override
    public List<Service> getCatalog(String type) {
        return (List<Service>) serviceRepository.findAllByType(type);
    }

    @Override
    public Integer getNumberOfServices(String type) {
        short typeId = typeRepository.findByName(type).getId();
        return this.serviceRepository.getNumberOfServices(typeId);
    }

    @Override
    public List<Service> getCatalog(String type, String page, String elementsPerPage) {

        short typeId = typeRepository.findByName(type).getId();
        Integer pageNumber = Integer.parseInt(page);
        Integer itemsPerPage = Integer.parseInt(elementsPerPage);
        return (List<Service>) (this.serviceRepository.getServicesOnPage((pageNumber - 1) * itemsPerPage, itemsPerPage, typeId));
    }
}
