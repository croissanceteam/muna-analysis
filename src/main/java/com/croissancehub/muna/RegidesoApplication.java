package com.croissancehub.muna;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
public class RegidesoApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(RegidesoApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		// TODO Auto-generated method stub
		return builder.sources(RegidesoApplication.class);
	}
	
}
