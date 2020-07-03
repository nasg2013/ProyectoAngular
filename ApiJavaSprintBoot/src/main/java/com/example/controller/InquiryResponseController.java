package com.example.controller;

import com.example.lab.InquiryResponse;
import com.example.service.InquiryResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/inquiryresponse")
public class InquiryResponseController {

    @Autowired
    private InquiryResponseService service;

    @GetMapping("/getAll")
    public List<InquiryResponse> list() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<InquiryResponse> get(@PathVariable Integer id) {
        try {
            InquiryResponse inquiryResponse = service.get(id);
            return new ResponseEntity<InquiryResponse>(inquiryResponse, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<InquiryResponse>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public void save(@RequestBody InquiryResponse inquiryResponse) {
        try {
            service.save(inquiryResponse);
        }
        catch ( Exception e ){
            throw e;
        }

    }

}
