package com.example.servingwebcontent.rest;

import com.example.servingwebcontent.rest.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.TreeMap;

@RestController
@CrossOrigin
public class ProductController {

    private final TreeMap<Integer, Product> productMap;

    public ProductController() {
        productMap = new TreeMap<>();
        productMap.put(0, new Product(0, "Apple"));
        productMap.put(1, new Product(1, "Banana"));
        productMap.put(2, new Product(2, "Carrot"));
    }

    @GetMapping("/products")
    public Collection<Product> getAllProducts() {
        return productMap.values();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productMap.get(id);
    }

    @PostMapping("/products")
    public void createProduct(@RequestBody Product product) {
        productMap.put(product.getId(), product);
    }
}
