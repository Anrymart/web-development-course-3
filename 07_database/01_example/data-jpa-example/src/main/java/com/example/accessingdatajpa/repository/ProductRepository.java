package com.example.accessingdatajpa.repository;

import com.example.accessingdatajpa.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findByName(String name);

	Product findById(long id);

	@Query("select p from Product p where p.category = ?1")
	List<Product> findByCategory(String category);

	@Query(value = "SELECT * FROM product WHERE category = ?1", nativeQuery = true)
	List<Product> findByCategoryNative(String category);

}
