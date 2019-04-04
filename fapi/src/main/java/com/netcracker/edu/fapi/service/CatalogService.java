package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.CatalogViewModel;

import java.util.List;

public interface CatalogService {
    List<CatalogViewModel> getCatalog(String type);
}
