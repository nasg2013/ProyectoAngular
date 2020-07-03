package com.example.controller;

import com.example.lab.Inquiry;
import com.example.service.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/inquiry")
public class InquiryController {

    @Autowired
    private InquiryService service;

    @GetMapping("/getAll")
    public List<Inquiry> list() {
        //¿reglas de negocio?
        //if...es admin
        return service.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inquiry> get(@PathVariable Integer id) {
        try {
            Inquiry inquiry = service.get(id);
            return new ResponseEntity<Inquiry>(inquiry, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Inquiry>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public void save(@RequestBody Inquiry inquiry) {
        service.save(inquiry);
    }

}
