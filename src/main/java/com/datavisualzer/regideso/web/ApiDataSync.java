package com.datavisualzer.regideso.web;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.constraints.NegativeOrZero;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datavisualzer.regideso.models.DataExportation;
import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.models.Users;
import com.datavisualzer.regideso.repositories.DataExportRepository;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.datavisualzer.regideso.repositories.UserRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class ApiDataSync {

	private JsonNode json;
	@Autowired
	private FactoryRepository factory;
	@Autowired
	private DataExportRepository dataExportRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	private DataExportation dataExport;
	@RequestMapping(value="api/datasyncsave/{keyname}/{data}")
	public String getOnaToSystem(@PathVariable String keyname, @PathVariable String data,HttpSession session) {
		if (session.getAttribute("uid")!=null) {
			try {
				Factory Orgunit=factory.findBykeyentity(keyname);
				Users user=userRepository.findById(Long.parseLong(session.getAttribute("uid").toString())).get();
			
				dataExport=new DataExportation(0, new Date(), data, user,false, Orgunit,0.0,9,Calendar.getInstance().get(Calendar.YEAR));
				dataExportRepository.save(dataExport);
			} catch (Exception e) {
				return "403";
			}
		}else {
			return "404";
		}
		return "200";
	}
}
