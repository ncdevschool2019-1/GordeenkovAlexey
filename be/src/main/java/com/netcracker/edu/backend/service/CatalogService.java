package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Service;

import java.util.List;

public interface CatalogService {
    List<Service> getCatalog(String type);

    Integer getNumberOfServices(String type);

    List<Service> getCatalog(String type, String page, String elementsPerPage);
}
