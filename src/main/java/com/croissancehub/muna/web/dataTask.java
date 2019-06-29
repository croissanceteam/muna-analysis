package com.croissancehub.muna.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.croissancehub.muna.repositories.DataExportRepository;

@Controller
public class dataTask {

    @Autowired
    private DataExportRepository dataExportRepository; 

    @GetMapping(value="/taskschedule/index")
    public String home(HttpSession session, HttpServletRequest request,ModelMap model){
        if (session.getAttribute("uid") != null) {
		
			model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			model.put("orgunitkey", session.getAttribute("orgunitkey").toString());
            model.put("orgunit", session.getAttribute("orgunit").toString());
            model.put("dataexport",dataExportRepository.getExportDatas(2018));
			if (!session.getAttribute("orgunitkey").toString().equals("rdc")
					&& !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
			return "views/datatask/index";
		}
        return "redirect:/";
    }
}