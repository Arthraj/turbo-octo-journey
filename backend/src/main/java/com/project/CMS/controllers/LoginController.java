package com.project.CMS.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.CMS.entity.Credentials;
import com.project.CMS.service.ApiService2;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin
public class LoginController {

    private final ApiService2 apiService2;

    @Autowired
    public LoginController(ApiService2 apiService2) {
        this.apiService2 = apiService2;
    }

    @PostMapping("/authenticate")
    @ResponseBody
    public Mono<String> getToken(@RequestBody Credentials credentials) {
        return apiService2.sendCredentials(credentials);
    }
}
