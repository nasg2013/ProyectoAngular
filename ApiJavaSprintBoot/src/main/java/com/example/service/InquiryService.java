package com.example.service;

import com.example.lab.Inquiry;
import com.example.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class InquiryService {

    @Autowired
    private InquiryRepository repository;

    public List<Inquiry> listAll() {
        return repository.findAll();
    }

    public void save(Inquiry inquiry) {
        repository.save(inquiry);
    }

    public Inquiry get(int id) {
        return repository.findById(id).get();
    }

}
