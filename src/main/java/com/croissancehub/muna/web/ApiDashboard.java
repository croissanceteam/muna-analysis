package com.croissancehub.muna.web;

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

import com.croissancehub.muna.models.DataExportation;
import com.croissancehub.muna.models.Factory;
import com.croissancehub.muna.repositories.DataExportRepository;
import com.croissancehub.muna.repositories.FactoryRepository;
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
