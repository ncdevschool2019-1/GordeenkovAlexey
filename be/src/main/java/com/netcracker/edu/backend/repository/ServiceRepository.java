package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Service;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ServiceRepository extends CrudRepository<Service, Long> {
    Iterable<Service> findAllByType(String type);

    @Query(value = "select count(*) from services where type_id=:type_id", nativeQuery = true)
    Integer getNumberOfServices(@Param(value = "type_id") int type_id);

    @Query(value = "select * from services where type_id=:type_id limit :offset, :count", nativeQuery = true)
    Iterable<Service> getServicesOnPage(@Param(value = "offset") Integer offset, @Param(value = "count") Integer count, @Param(value = "type_id") short type_id);
}
