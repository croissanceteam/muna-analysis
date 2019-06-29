package com.croissancehub.muna.web;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import com.croissancehub.muna.models.Factory;
import com.croissancehub.muna.models.orgunits;
import com.croissancehub.muna.process.FactoryProcess;
import com.croissancehub.muna.repositories.FactoryRepository;

@Controller
public class factoryController {

	private FactoryProcess factoryProcess=null;
	@Autowired
	private FactoryRepository factoryRepository;
	private String routeViews="views/factory/views";
	
	@RequestMapping(value= {"factory/views.do","factory"})
	public String addNewFactory(HttpSession session,ModelMap model) {
	if (session.getAttribute("uid")!=null) {
		model.put("uid", session.getAttribute("uid").toString());
		model.put("username", session.getAttribute("username").toString());
		model.put("orgunit", session.getAttribute("orgunit").toString());
    	model.put("orgunitkey", session.getAttribute("orgunitkey").toString());
    	model.put("rule", session.getAttribute("rule").toString());
		return routeViews;
	}
		return "redirect:/";
	}
	/*

	@RequestMapping(value= {"factory/views.do"},method=RequestMethod.POST,produces="application/json")
	@ResponseBody
	public String addNewFactory(HttpSession session,HttpServletRequest request) {
	if (session.getAttribute("uid")!=null) {
		Factory parent=factoryRepository.findById(Integer.parseInt(request.getParameter("parentid"))).get();
		Factory factory=new Factory();
		factory.setId(0);
		factory.setLabelentity(request.getParameter("factoryname"));
		factory.setIdparent(parent);
		factory.setKeyentity(request.getParameter("keyfactoryname"));
		factory.setLat(request.getParameter("factorylat"));
		factory.setLng(request.getParameter("factorylng"));
		factory.setCategory(request.getParameter("child"));
		factory.setEmbedcard(request.getParameter("factorymap"));
		factoryRepository.save(factory);
		return "redirect:/dashboard";
	}
		return "redirect:/dashboard";
	}
	*/

	@RequestMapping(value="/tablesorgunits",method=RequestMethod.GET)
	public String OrguniTables() {
		return "views/factory/partials/OrgunitTables";
	}
	
	@RequestMapping(value="/orgunitfactory",method=RequestMethod.GET)
	public String OrgunitFactory() {
		return "views/factory/partials/OrgunitsFactory";
	}

	@RequestMapping(value="/path")
	@ResponseBody
	public String getPath(HttpServletRequest req) {
		String str=this.getClass().getClassLoader().getResource("").getPath();
		String fullpath=str.split("regideso")[0]+"regideso/src/main/resources/static/data.xls";
		return str;
	}
	
	 @RequestMapping(value = "downloadTestFile/{type}", method = RequestMethod.GET)
	 @ResponseBody
	    public StreamingResponseBody getSteamingFile(HttpServletResponse response,@PathVariable("type") String type) throws IOException {
		if(type.equals("xls")){
			String str=this.getClass().getClassLoader().getResource("").getPath();
			String fullpath=str.split("regideso")[0]+"regideso/src/main/resources/static/exports/data.xlsx";
			response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			response.setHeader("Content-Disposition", "attachment; filename=\"data.xlsx\"");
			InputStream inputStream = new FileInputStream(new File(fullpath));
		
			return outputStream -> {
			    int nRead;
			    byte[] data = new byte[1024];
			    while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
			        System.out.println("Writing some bytes of file...");
			        outputStream.write(data, 0, nRead);
			    }
			};
		} else {
			response.sendRedirect("failed url...");
		}
		return null;
	    }
}

