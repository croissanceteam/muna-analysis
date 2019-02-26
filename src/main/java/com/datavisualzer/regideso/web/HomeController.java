package com.datavisualzer.regideso.web;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.client.MultipartBodyBuilder.PublisherEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datavisualzer.regideso.models.PermissionTypeFileOrgunitUser;
import com.datavisualzer.regideso.models.Users;
import com.datavisualzer.regideso.repositories.PermissionTypeFileOrgunitUserRepository;
import com.datavisualzer.regideso.repositories.UserRepository;


@Controller
public class HomeController{
	String url="views/home";
	private static final String ROOT="redirect:/";
	@Autowired
	UserRepository userRepository;

	@Autowired
	PermissionTypeFileOrgunitUserRepository permissionTypeFileOrgunitUserRepository;
    @RequestMapping("/")
    public String Home(HttpSession session,ModelMap model){
    	String route="";
    	if (session.getAttribute("uid")==null) {
			route="login";
			model.put("login", "root");
		}else {
			model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			route="redirect:/dashboard/index.do";
		}
		if(session.getAttribute("login")!=null){
			model.put("login", "failed");
		}
		if (session.getAttribute("bugs")!=null) {
			model.put("bugs", session.getAttribute("bugs").toString());
		}
    	/*Users users=new Users();
    	users.setId(1); 
    	users.setUsername("@Lama");
    	users.setPassword("@@@@");
    	users.setFullname("Hornel LAMA");
    	userRepository.save(users);
    	*/
    	
        return route;
    }
    @RequestMapping(value="user/{id}",method=RequestMethod.GET,produces="application/json")
    @ResponseBody
    public Optional<Users> getUser(@PathVariable("id")Long id) {
    	return userRepository.findById(id);
    }
    
    @RequestMapping(value="/",method=RequestMethod.POST)
   // @ResponseBody
	public String doLogin(@RequestParam String username, @RequestParam String password,
	HttpServletRequest req,
	HttpSession session,ModelMap model) {
        
    try {
		Users user=userRepository.findByusernameAndpassword(username,password);
		if(user!=null) {
			PermissionTypeFileOrgunitUser permissionTypeFileOrgunitUser=permissionTypeFileOrgunitUserRepository.findByidUsers(user);
    		session.setAttribute("uid", user.getId());
			session.setAttribute("username", user.getFullname());
			session.setAttribute("orgunit", permissionTypeFileOrgunitUser.getIdFactory().getLabelentity());
			session.setAttribute("orgunitkey", permissionTypeFileOrgunitUser.getIdFactory().getKeyentity());
			session.setAttribute("rule", permissionTypeFileOrgunitUser.getIdPermission().getRole());
			session.removeAttribute("login");
    		return "redirect:/dashboard/index.do";
    	}else{
			session.setAttribute("login", "failed");
		}
	} catch (Exception e) {
		session.setAttribute("bugs",e.getMessage());
		
		//TODO: handle exception
	}
    	
    	return ROOT;
    }
    
    @RequestMapping(value="dashboard/index.do")
    public String dashboard(ModelMap model,HttpSession session) {
    	if(session.getAttribute("uid")!=null) {
    		model.put("uid", session.getAttribute("uid").toString());
    		model.put("username", session.getAttribute("username").toString());
    		model.put("orgunit", session.getAttribute("orgunit").toString());
    		model.put("orgunitkey", session.getAttribute("orgunitkey").toString());
    		return url;
    	}
    	return "redirect:/";
	}
    @RequestMapping("logout.do")
    public String doLogout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
    
  
}