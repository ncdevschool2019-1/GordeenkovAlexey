package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Service;
import org.springframework.data.repository.CrudRepository;

public interface ServiceRepository extends CrudRepository<Service, Long> {
    Iterable<Service> findAllByType(String type);
}
