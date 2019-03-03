package com.datavisualzer.regideso.web;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.datavisualzer.regideso.models.Indicators;
import com.datavisualzer.regideso.models.TypeFileIndicators;
import com.datavisualzer.regideso.repositories.IndicatorRepository;
import com.datavisualzer.regideso.repositories.TypeFileIndicatorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class indicatorController {

	@Autowired
	private IndicatorRepository indicatorRepository;
	@Autowired
	private TypeFileIndicatorRepository typeFileIndicatorRepository;

	@RequestMapping(value = "/indicators/index")
	public String index(HttpSession session, HttpServletRequest request, ModelMap model) {
		if (session.getAttribute("uid") != null) {
			model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			model.put("orgunitkey", session.getAttribute("orgunitkey").toString());
			model.put("orgunit", session.getAttribute("orgunit").toString());
			if (!session.getAttribute("orgunitkey").toString().equals("rdc")
					&& !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
			return "views/indicators/home";
		}

		return "redirect:/";
	}
	
	
	@RequestMapping(value = "/indicators/index",method=RequestMethod.POST)
	public String doPost(HttpSession session, HttpServletRequest request, ModelMap model) {
		if (session.getAttribute("uid") != null) {
			model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			model.put("orgunitkey", session.getAttribute("orgunitkey").toString());
			model.put("orgunit", session.getAttribute("orgunit").toString());
			if (!session.getAttribute("orgunitkey").toString().equals("rdc")
					&& !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
			return "views/indicators/home";
		}

		return "redirect:/";
	}

	@RequestMapping(value = "api/indicators")
	@ResponseBody
	public LinkedList<Indicators> getIndicatorsList(HttpSession session, HttpServletRequest request) {
		return indicatorRepository.getIndicators();
	}

	@RequestMapping(value = "indicators/{id}")
	public String viewIndicator(HttpSession session, HttpServletRequest request, ModelMap model,
			@PathVariable String id) {
		if (session.getAttribute("uid") != null) {
			TypeFileIndicators indic = typeFileIndicatorRepository.getOneTypeFileIndicator(Integer.parseInt(id));
			model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			model.put("orgunitkey", session.getAttribute("orgunitkey").toString());
			model.put("orgunit", session.getAttribute("orgunit").toString());
			model.put("indicator", indic);
			if (!session.getAttribute("orgunitkey").toString().equals("rdc")
					&& !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
			return "views/indicators/update";
		}
		return "redirect:/";
	}

	@RequestMapping(value = "indicators/{id}", method = RequestMethod.POST)
	public String updateIndicator(HttpSession session, HttpServletRequest request, ModelMap model,
			@PathVariable String id, @RequestParam String keyname, @RequestParam String indicatorname,
			@RequestParam String datefilter1, @RequestParam String datefilter2) throws ParseException {
		if (session.getAttribute("uid")!=null) {
			TypeFileIndicators indic =typeFileIndicatorRepository.getOneTypeFileIndicator(Integer.parseInt(id));
			Indicators indicatorsUpdate=indicatorRepository.findById(Integer.parseInt(id)).get();
			if (indicatorsUpdate!=null) {
				indicatorsUpdate.setKeycode(keyname);
				indicatorsUpdate.setIndicatorname(indicatorname);
				
				indicatorsUpdate.setDatebegin(new SimpleDateFormat("YYYY-MM-DD").parse(datefilter1));
				indicatorsUpdate.setDateend(new SimpleDateFormat("YYYY-MM-DD").parse(datefilter2));
				indicatorRepository.save(indicatorsUpdate);
			}
			
			if (!session.getAttribute("orgunitkey").toString().equals("rdc") && !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
			return "redirect:/indicators/index";
		}
		return "redirect:/";
	}
}
