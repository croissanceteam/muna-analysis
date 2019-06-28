package com.datavisualzer.regideso.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MobileController {

	@GetMapping("admin/mobile")
	public String home() {
		return "views/mobile/index";
	}
}
