package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import com.netcracker.edu.fapi.service.CatalogService;
import com.sun.org.apache.bcel.internal.generic.RETURN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/catalog")
public class CatalogController {

    @Autowired
    private CatalogService catalogService;

    @RequestMapping(value = "/type/{type}", method = RequestMethod.GET)
       public ResponseEntity<List<CatalogViewModel>> getCatalog(@PathVariable String type) {
           return ResponseEntity.ok(catalogService.getCatalog(type));
       }

    @RequestMapping(value = "/pages/{type}", method = RequestMethod.GET)
    public ResponseEntity<Integer> getNumberOfPages(@PathVariable String type) {
        return ResponseEntity.ok(catalogService.getNumberOfPages(type));
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<CatalogViewModel>> getPage(@RequestParam String type, String page, String elementsPerPage) {
        return ResponseEntity.ok(catalogService.getCatalog(type, page, elementsPerPage));
    }
}