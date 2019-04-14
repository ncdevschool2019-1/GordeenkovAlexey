package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Service;

import java.util.List;

public interface CatalogService {
    List<Service> getCatalog(String type);
}
