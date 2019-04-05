package com.datavisualzer.regideso.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class DataAnalysisController {
    /* Page View Client*/

    @GetMapping(value ={"analysis/index.do","analysis/index","analysis"})
    public String home(HttpServletRequest req, HttpSession session){
        if (session.getAttribute("uid")==null){
            return "redirect:/";
        }
        return "views/analysis/index";
    }

    /* Api Datas Customers*/
}
