package com.example.accessingdatajpa;

import com.example.accessingdatajpa.entity.Product;
import com.example.accessingdatajpa.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringDataJpaApplication {

	private static final Logger log = LoggerFactory.getLogger(SpringDataJpaApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringDataJpaApplication.class);
	}

	@Bean
	public CommandLineRunner demo(ProductRepository repository) {
		return (args) -> {
			// save a few products
			repository.save(new Product("Apple", "Fruits"));
			repository.save(new Product("Banana", "Fruits"));
			repository.save(new Product("Carrot", "Vegetables"));
			repository.save(new Product("Orange", "Fruits"));
			repository.save(new Product("Chicken Helmet", "Pets"));

			// fetch all products
			log.info("Products found with findAll():");
			log.info("-------------------------------");
			for (Product product : repository.findAll()) {
				log.info(product.toString());
			}
			log.info("");

			// fetch an individual product by ID
			Product product = repository.findById(10L);
			log.info("Product found with findById(10L):");
			log.info("--------------------------------");
			log.info(product.toString());
			log.info("");

			// fetch products by name
			log.info("Product found with findByName('Orange'):");
			log.info("--------------------------------------------");
			repository.findByName("Orange")
					.forEach(orange -> log.info(orange.toString()));
			// for (Product product : repository.findByCategory("Fruits")) {
			// 	log.info(product.toString());
			// }
			log.info("");
		};
	}

}
