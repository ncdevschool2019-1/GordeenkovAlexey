package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Status;
import org.springframework.data.repository.CrudRepository;

public interface StatusRepository extends CrudRepository<Status, Short> {
    Status findByName(String name);
}
