package com.project.CMS.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.CMS.entity.Credentials;
import com.project.CMS.entity.Customer;

import reactor.core.publisher.Mono;

@Service
public class ApiService2 {
 
    private WebClient webClient = null;
//    private String bearerToken;
    
    public ApiService2(WebClient.Builder webClientBuilder) {
    }
    
    private void buildVerifiedClient(String token) {
    	this.webClient= WebClient.builder()
            .baseUrl("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp")
            .defaultHeader(HttpHeaders.AUTHORIZATION,"Bearer "+token)
            .build();
	// TODO Auto-generated method stub
    }
    
    public Mono<String> sendCredentials(Credentials cred) {
    	WebClient credentialsWebClient = WebClient.builder()
                .baseUrl("https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp")
                .build();
    	
        Mono<String> successful= credentialsWebClient.post()
                .uri("",cred)
                .body(BodyInserters.fromValue(cred))
                .retrieve()
                .bodyToMono(String.class)
		        .onErrorResume(error -> {
		          System.out.println("Invalid Credentials");
		          return Mono.empty(); // Return an empty Mono on error
		      });
        		
        return successful;
    }
    

//    get customers
    public Mono<String> fetchDataFromApi(String cmd,String token) {
    	System.out.println(token);
    	
    	buildVerifiedClient(token);
        return this.webClient.get().uri("?cmd={cmd}", cmd)
                        .retrieve().bodyToMono(String.class).onErrorResume(error->{
                        	System.out.println("UnAuthorized");
                        	return Mono.empty();
                        });
    }
    
   

//  create customer  
    public Mono<String> createCustomer(String cmd, Customer customer) {
        // POST request to create or update customer
        return this.webClient.post().uri("?cmd={cmd}", cmd)
                .body(BodyInserters.fromValue(customer))
                .retrieve().bodyToMono(String.class);
    }
    
    public Mono<String> updateCustomer(String uuid, Customer customer) {
        // POST request to create or update customer
        return this.webClient.post().uri("?cmd=update&uuid={uuid}", uuid)
                .body(BodyInserters.fromValue(customer))
                .retrieve().bodyToMono(String.class);
    }
    
    
    public Mono<String> deleteCustomerByUuid(String uuid) {
//    	System.out.println(uuid);
        return this.webClient.post().uri("?cmd=delete&uuid={uuid}", uuid)
                .retrieve().bodyToMono(String.class);
    }
    
}