package com.project.CMS.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.CMS.entity.Customer;
import com.project.CMS.service.ApiService2;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class Controller {
	
	@Autowired
    private final ApiService2 apiService;
    
    public Controller(ApiService2 apiService) {
        this.apiService = apiService;
    }

    @GetMapping
    public Mono<String> fetchCustomers(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        return apiService.fetchDataFromApi("get_customer_list",token);
    }
    
    @PostMapping()
    public Mono<String> createCustomer(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,@RequestBody Customer c ){
    	return apiService.createCustomer("create", c);
    	
    }
    
    @PutMapping("/{uuid}")
    public Mono<String> updateCustomer(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,@RequestBody Customer updateCustomer, @PathVariable String uuid){
    		return apiService.updateCustomer(uuid, updateCustomer);
    }
    
    @DeleteMapping("/{uuid}")
    public Mono<String> deleteCustomer(@RequestHeader(HttpHeaders.AUTHORIZATION) String token,@PathVariable String uuid){	
    	return apiService.deleteCustomerByUuid(uuid);
    }
}





