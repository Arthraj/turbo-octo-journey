//package com.project.CMS.service;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.stereotype.Service;
//import org.springframework.web.reactive.function.BodyInserters;
//import org.springframework.web.reactive.function.client.WebClient;
//
//import com.project.CMS.entity.Credentials;
//
//import reactor.core.publisher.Mono;
//
//@Service
//public class AuthService {
//
//    private String authUrl="https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp"  ; // The base URL of the API
//
//    
//    public AuthService(String authUrl) {
////        this.authUrl = authUrl;
//    }
//
//    public Mono<String> getToken(Credentials credentials) {
//        WebClient webClient = WebClient.create(authUrl);
//
//        // API endpoint to get the Bearer token (adjust the endpoint as per your API)
//        String tokenEndpoint = "";
//
//        // Make the POST request with the provided login and password to get the token
//        return webClient.post()
//                .uri(tokenEndpoint)
//                .contentType(MediaType.APPLICATION_JSON)
//                .body(BodyInserters.fromValue(credentials))
//                .retrieve()
//                .bodyToMono(String.class);
//    }
//}
