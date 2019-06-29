package com.croissancehub.muna.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.croissancehub.muna.models.MobileFunc;
import com.croissancehub.muna.models.PermissionTypeFileOrgunitUser;
import com.croissancehub.muna.models.PrivilegeMobile;
import com.croissancehub.muna.models.Users;
import com.croissancehub.muna.process.CryptoSHA512;
import com.croissancehub.muna.repositories.FactoryRepository;
import com.croissancehub.muna.repositories.MobileFuncRepository;
import com.croissancehub.muna.repositories.PermissionRepository;
import com.croissancehub.muna.repositories.PermissionTypeFileOrgunitUserRepository;
import com.croissancehub.muna.repositories.PrivilegeMobileRepository;
import com.croissancehub.muna.repositories.UserRepository;
import com.graphbuilder.struc.LinkedList;

import io.swagger.annotations.Api;

@Api(description="Class REST pour le client mobile")
@RestController
@RequestMapping("/api/mobile/")
public class MobileClient {

		@Autowired
	  	private PermissionTypeFileOrgunitUserRepository permissionRepository;
		@Autowired
		private UserRepository userRepository;
		@Autowired
		private FactoryRepository factoryRepository;
		@Autowired
		private PermissionRepository authorityRepository;
		@Autowired
		private MobileFuncRepository mobileFuncRepository;
		@Autowired
		private PrivilegeMobileRepository priviligeMobileRepository;
		
	    @PostMapping("login")
	    public Object LoggerMobile(@RequestParam String username,@RequestParam String password) throws Exception {
	    	Users userAuthenticated=userRepository.findByusernameAndpassword(username,CryptoSHA512.getPassWord(password));
	    	if (userAuthenticated!=null) {
				//ObjectMapper mapper=new ObjectMapper();
				return permissionRepository.findByidUsers(userAuthenticated);
			} 
	    	Map map=new HashedMap<String,Integer>();
	    	map.put("id", 0);
	    	return map;
	    }
    

    
    
    @GetMapping("/functionalities")
    public List<MobileFunc> getFuncs() {
    	
		return (List<MobileFunc>) mobileFuncRepository.findAll();	
    }
    
    @GetMapping("/accessfuncs/{iduser}")
    public Map<String, Object> getAccessFuncs(@PathVariable Long iduser) {
    	Map<String,Object>map=new HashMap<>();
    	Users user=userRepository.findById(iduser).get();
    	map.put("orgunit", permissionRepository.findByidUsers(user));
    	map.put("function",priviligeMobileRepository.findPrivilegeByiduser(user));
		return  map;	
    }
    
    
  
    @GetMapping("/orgunitaccess/{iduser}")
    public PermissionTypeFileOrgunitUser getAccessOrgunit(@PathVariable Long iduser){
    	Users user=userRepository.findById(iduser).get();
    	return permissionRepository.findByidUsers(user);
    }
    
}
