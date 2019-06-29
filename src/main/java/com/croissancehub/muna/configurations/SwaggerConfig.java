package com.croissancehub.muna.configurations;

import java.util.ArrayList;
import java.util.HashSet;

import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import io.swagger.models.Contact;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.Collections;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
@Configuration
@EnableSwagger2
@EnableWebMvc
public class SwaggerConfig extends WebMvcConfigurerAdapter{
	   

	@Bean
    public Docket apis() {
    	return new Docket(DocumentationType.SWAGGER_2)   
    			  .groupName("All apis")
    		      .select()                                       
    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.api"))
    		      .paths(PathSelectors.any())                     
    		      .build()
    		      .apiInfo(metaData())
    		      ;

    }
	    @Bean
	    public Docket apiUsers() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("Apis User")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.api"))
	    		      .paths(PathSelectors.regex("/userapi/.*"))                     
	    		      .build()
	    		      .apiInfo(metaData())
	    		      ;

	    }
	    
	    @Bean
	    public Docket apiMobile() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("Api Mobile")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.api"))
	    		      .paths(PathSelectors.regex("/api/mobile/.*"))                     
	    		      .build()
	    		      .apiInfo(metaData())
	    		      ;

	    }
	    
	    @Bean
	    public Docket apiSettings() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("Api Settings")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.api"))
	    		      .paths(PathSelectors.regex("/api/settings/.*"))                     
	    		      .build()
	    		      .apiInfo(metaData())
	    		      ;

	    }
	    
	    @Bean
	    public Docket apiAnalysis() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("Api Analysis")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.api"))
	    		      .paths(PathSelectors.regex("/api/dashboard/.*"))                     
	    		      .build()
	    		      .apiInfo(metaData())
	    		      ;

	    }
	    
	    @Bean
	    public Docket apiTypefile() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("Api Survey")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.api"))
	    		      .paths(PathSelectors.regex("/api/typefiles/.*"))                     
	    		      .build()
	    		      .apiInfo(metaData())
	    		      ;

	    }
	    
	    @Bean
	    public Docket apiIndicator() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("Api Indicator")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.api"))
	    		      .paths(PathSelectors.regex("/api/indicator/.*"))                     
	    		      .build()
	    		      .apiInfo(metaData())
	    		      ;

	    }
	    
	    @Bean
	    public Docket repositoryInterfaces() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("List Repositories")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.repositories"))
	    		      .paths(PathSelectors.any())                     
	    		      .build()
	    		      ;

	    }
	    
	    @Bean
	    public Docket Pages() {
	    	return new Docket(DocumentationType.SWAGGER_2)   
	    			  .groupName("Pages Routes")
	    		      .select()                                       
	    		      .apis(RequestHandlerSelectors.basePackage("com.croissancehub.muna.web"))
	    		      .paths(PathSelectors.any())                     
	    		      .build()
	    		      .apiInfo(metaData())
	    		      ;

	    }
	    
	    private ApiInfo metaData() {
	        return new ApiInfoBuilder()
	                .title("APIs Documentation")
	                .description("Une documentation technique sur les apis, urls et pages web du système")
	                .version("1.0.0")
	                .license("Developed by croissancehub Team dev")
	                .licenseUrl("https://www.croissancehub.com\"")
	                .build();
	    }
	    
	    
	    
	    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
	    		"classpath:/META-INF/resources/", "classpath:/resources/",
	    		"classpath:/static/", "classpath:/public/" };
	    
	    @Override
	    public void addResourceHandlers(ResourceHandlerRegistry registry) {
	        registry.addResourceHandler("swagger-ui.html")
	          .addResourceLocations("classpath:/META-INF/resources/");
	    
	        
	        if (!registry.hasMappingForPattern("/webjars/**")) {
	    		registry.addResourceHandler("/webjars/**").addResourceLocations(
	    				"classpath:/META-INF/resources/webjars/");
	    	}
	    	if (!registry.hasMappingForPattern("/**")) {
	    		registry.addResourceHandler("/**").addResourceLocations(
	    				CLASSPATH_RESOURCE_LOCATIONS);
	    	}
	    }
	   
}
