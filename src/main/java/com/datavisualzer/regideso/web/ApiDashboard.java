package com.datavisualzer.regideso.web;

import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.datavisualzer.regideso.models.DataExportation;
import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.repositories.DataExportRepository;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//import com.mysql.fabric.xmlrpc.base.Data;
//import com.mysql.*;
@RestController
public class ApiDashboard {

	private final static int YEAR=Calendar.getInstance().get(Calendar.YEAR);
	@Autowired
	private DataExportRepository dataExportRepository;
	@Autowired
	private FactoryRepository factoryRepository;






}
