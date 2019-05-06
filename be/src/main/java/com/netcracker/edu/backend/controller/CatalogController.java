package com.netcracker.edu.backend.controller;


import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.ServiceRepository;
import com.netcracker.edu.backend.service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/catalog")
public class CatalogController {
    @Autowired
    private CatalogService catalogService;
    @Autowired
    private ServiceRepository serviceRepository;


    @RequestMapping(value = "/type/{type}", method = RequestMethod.GET)
    public Iterable<Service> getCatalog(@PathVariable String type) {
        return catalogService.getCatalog(type);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Service> getPage(@RequestParam String type, String page) {
        return catalogService.getCatalog(type, page);
    }

    @RequestMapping(value = "/pages/{type}", method = RequestMethod.GET)
    public Integer getNumberOfPages(@PathVariable String type) {
        return catalogService.getNumberOfServices(type);
    }


    @RequestMapping(method = RequestMethod.POST)
    public Service addService(@RequestBody Service service) {
        return serviceRepository.save(service);
    }
}
