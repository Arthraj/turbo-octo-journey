package com.project.CMS.entity;

import lombok.Data;

@Data
public class Customer {
	
	private long id;
	private String first_name;
	private String last_name;
	private String street;
	private String address;
	private String city;
	private String state;
	private String email;
	private String phone;
}
