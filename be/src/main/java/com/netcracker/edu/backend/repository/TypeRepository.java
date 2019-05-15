package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.entity.Type;
import org.springframework.data.repository.CrudRepository;

public interface TypeRepository extends CrudRepository<Type, Short> {
    Type findByName(String name);
}
