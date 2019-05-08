package com.datavisualzer.regideso.web;

import java.util.Date;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datavisualzer.regideso.models.TypeFile;
import com.datavisualzer.regideso.models.TypeFileIndicators;
import com.datavisualzer.regideso.repositories.TypeFileIndicatorRepository;
import com.datavisualzer.regideso.repositories.TypeFileRepository;

@Controller
public class typeFileController {
	 @Autowired
	 private TypeFileRepository typeFileRepository;
	 
	 @Autowired
	 private TypeFileIndicatorRepository typeFileIndicatorRepository;
	private final static String URL="views/typefile/views";
	@RequestMapping(value="typefile/index.do")
	public String Home(HttpSession session, HttpServletRequest request) {
		if (session.getAttribute("uid")==null) {
			return "redirect:/";
		}
		if (!session.getAttribute("orgunitkey").toString().equals("rdc") && !session.getAttribute("rule").toString().equals("superadmin")) {
			return "views/errors/error-403";
		}
		return URL;
	}
	
	@RequestMapping(value="typefile/index.do",method=RequestMethod.POST)
	@ResponseBody
	public String doPostHome(HttpSession session, HttpServletRequest request) {

		TypeFile typeFile=new TypeFile();
		typeFile.setId(0);
		typeFile.setKeycode(request.getParameter("keyshortname"));
		typeFile.setTypefilename(request.getParameter("dataformname"));
		typeFile.setDatecreated(new Date());
		typeFile.setParent(typeFileRepository.findByid(Integer.parseInt(request.getParameter("parentid").toString())));
		typeFile.setDatevalidity(new Date());
		typeFileRepository.save(typeFile);
		return "OK";
	}


}
