package com.datavisualzer.regideso.web;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * ErrorControllerViewer
 */
@Controller
public class ErrorControllerViewer implements ErrorController{

    @RequestMapping(value="/error")
    public String errorviewpage(HttpServletRequest request,ModelMap model){
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
     
    if (status != null) {
        Integer statusCode = Integer.valueOf(status.toString());
     
        if(statusCode == HttpStatus.NOT_FOUND.value()) {
            return "views/errors/error-404";
        }
        else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
            model.put("message",HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
            return "views/errors/error-500";
        }
    }
        return "views/errors/error-403";
    }

    @Override
    public String getErrorPath() {
        return null;
    }
}