package com.project.CMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;


@SpringBootApplication
public class SunbaseAssesmentApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(SunbaseAssesmentApplication.class, args);
		System.out.println("Active");
	}

}
