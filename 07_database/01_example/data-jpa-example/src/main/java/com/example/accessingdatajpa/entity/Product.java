package com.example.accessingdatajpa.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String name;
	private String category;

	protected Product() {}

	public Product(String name, String category) {
		this.name = name;
		this.category = category;
	}

	@Override
	public String toString() {
		return String.format(
				"Product[id=%d, firstName='%s', lastName='%s']",
				id, name, category);
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getCategory() {
		return category;
	}
}
