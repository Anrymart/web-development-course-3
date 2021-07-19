package com.example.servingwebcontent.webclient;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class ProductWebClient {

    private final WebClient client = WebClient.create("https://fakestoreapi.com/");

    public String getProducts() {
        return client.get()
                .uri("/hello")
                .accept(MediaType.TEXT_PLAIN)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
