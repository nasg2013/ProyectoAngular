package com.example.service;

import com.example.lab.InquiryResponse;
import com.example.repository.InquiryResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class InquiryResponseService {

    @Autowired
    private InquiryResponseRepository repository;

    public List<InquiryResponse> listAll() {
        return repository.findAll();
    }

    public void save(InquiryResponse inquiryResponse) {
        repository.save(inquiryResponse);
    }

    public InquiryResponse get(int id) {
        return repository.findById(id).get();
    }
}
