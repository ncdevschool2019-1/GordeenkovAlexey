package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Status;
import com.netcracker.edu.backend.repository.StatusRepository;
import com.netcracker.edu.backend.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatusServiceImpl implements StatusService {

    @Autowired
    private StatusRepository statusRepository;

    @Override
    public Status getStatus(String name) {
        return statusRepository.findByName(name);
    }
}
