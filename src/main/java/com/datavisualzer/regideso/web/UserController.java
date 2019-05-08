package com.datavisualzer.regideso.web;

import java.security.NoSuchAlgorithmException;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.models.PermissionTypeFileOrgunitUser;
import com.datavisualzer.regideso.models.Permissions;
import com.datavisualzer.regideso.models.Users;
import com.datavisualzer.regideso.process.CryptoSHA512;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.datavisualzer.regideso.repositories.PermissionRepository;
import com.datavisualzer.regideso.repositories.PermissionTypeFileOrgunitUserRepository;
import com.datavisualzer.regideso.repositories.UserRepository;

@Controller
public class UserController {

	@Autowired
	private PermissionTypeFileOrgunitUserRepository permissionTypeFileOrgunitUserRepository;
	
	@Autowired
	private PermissionRepository permissionRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private FactoryRepository factoryRepository;

	@GetMapping("users/management")
	public String viewFormsUsers(HttpSession session,ModelMap model){
		if(session.getAttribute("uid")!=null) {
    		model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			if (!session.getAttribute("orgunitkey").toString().equals("rdc") && !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
    	}else{
			return "redirect:/";
		}
		return "views/admin/users/manages";
	}

	@RequestMapping(value="users/management",method=RequestMethod.POST)
	//@ResponseBody
	public String addNewUser
	(HttpSession session,HttpServletRequest request,
	 @RequestParam String fullname,
	 @RequestParam String user,
	 @RequestParam String pwd,
	 @RequestParam String area,
	 @RequestParam String rules,
	 @RequestParam String statusNumber,
	 @RequestParam String iduser) throws NoSuchAlgorithmException
	{
		Permissions permissions=null;
		Factory factory=null;
		Users users=new Users();
		Calendar cal=Calendar.getInstance();
		//users.setId(null);
		
		//String dateSub=cal.get(Calendar.YEAR)+"-"+cal.get(Calendar.MONTH)+"-"+cal.get(Calendar.DAY_OF_MONTH);
		//return users;
		if(statusNumber==""){
			users.setFullname(fullname);
			users.setUsername(user);
			users.setPassword(CryptoSHA512.getPassWord(pwd));
			users.setStatus(1);
			userRepository.save(users);
			permissions=permissionRepository.findByRole(rules);
			factory=factoryRepository.findBykeyentity(area);
			//users.setId(users.getId());
			PermissionTypeFileOrgunitUser permissionTypeFileOrgunitUser=new PermissionTypeFileOrgunitUser();
			permissionTypeFileOrgunitUser.setIdFactory(factory);
			permissionTypeFileOrgunitUser.setIdPermission(permissions);
			permissionTypeFileOrgunitUser.setIdUsers(users);
			permissionTypeFileOrgunitUser.setDatePermision(new Date());
			permissionTypeFileOrgunitUserRepository.save(permissionTypeFileOrgunitUser);
		}else{
			PermissionTypeFileOrgunitUser permissionTypeFileOrgunitUser=new PermissionTypeFileOrgunitUser();
			Users uid=userRepository.findById(Long.parseLong(iduser)).get();
			uid.setFullname(formatFullname(fullname));
			uid.setUsername(user.toLowerCase());
			uid.setPassword(CryptoSHA512.getPassWord(pwd));
			uid.setStatus(Integer.parseInt(statusNumber));
			userRepository.save(users);
			//return uid.getFullname();
			if (rules!="") {
				permissions=permissionRepository.findByRole(rules);
				permissionTypeFileOrgunitUser=permissionTypeFileOrgunitUserRepository.findByidUsers(uid);
				permissionTypeFileOrgunitUser.setIdPermission(permissions);
				permissionTypeFileOrgunitUser.setIdFactory(factory);
				permissionTypeFileOrgunitUser.setDatePermision(new Date());
				
			}
			if (area!="") {
				factory=factoryRepository.findBykeyentity(area);
				permissionTypeFileOrgunitUser.setIdPermission(permissions);
				permissionTypeFileOrgunitUser=permissionTypeFileOrgunitUserRepository.findByidUsers(uid);
				permissionTypeFileOrgunitUser.setIdFactory(factory);
				permissionTypeFileOrgunitUser.setDatePermision(new Date());
							
			}
			if(area!="" || rules!=""){
				permissionTypeFileOrgunitUserRepository.save(permissionTypeFileOrgunitUser);
			}
			
			//permissionTypeFileOrgunitUserRepository.save(permissionTypeFileOrgunitUser);

			//return permissionTypeFileOrgunitUser;
		}
		return "redirect:/users/management";
		//return null;
	}
	@GetMapping("user/myinfo")
	 public String viewUserInfos(HttpSession session, HttpServletRequest request,ModelMap model){
		 if(session.getAttribute("uid")!=null) {
			 model.put("uid", session.getAttribute("uid").toString());
			 model.put("username", session.getAttribute("username").toString());

		 }else{
			 return "redirect:/";
		 }
		return "views/";
	 }
	private String formatFullname(String name){
		String nameFormatted="";
		for (String partialName : name.split(" ")) {
			partialName=partialName.substring(0,1).toUpperCase()+partialName.substring(1).toLowerCase();
			nameFormatted+=partialName+" ";
		}
		return nameFormatted.trim();
	}
}
