package com.datavisualzer.regideso.web.api;

import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.models.PermissionTypeFileOrgunitUser;
import com.datavisualzer.regideso.models.Permissions;
import com.datavisualzer.regideso.models.Users;
import com.datavisualzer.regideso.process.CryptoSHA512;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.datavisualzer.regideso.repositories.PermissionRepository;
import com.datavisualzer.regideso.repositories.PermissionTypeFileOrgunitUserRepository;
import com.datavisualzer.regideso.repositories.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import javassist.expr.NewArray;

import org.apache.commons.collections4.map.HashedMap;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.security.NoSuchAlgorithmException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
public class UserApi {

    private PermissionTypeFileOrgunitUserRepository permissionRepository;
    private UserRepository userRepository;
    private FactoryRepository factoryRepository;
    private PermissionRepository authorityRepository;

    public UserApi(PermissionTypeFileOrgunitUserRepository permission,
                   UserRepository user,
                   FactoryRepository factory,
                   PermissionRepository authority){
        this.permissionRepository=permission;
        this.userRepository=user;
        this.factoryRepository=factory;
        this.authorityRepository=authority;
    }
    @GetMapping("api/userinfos/{id}")
    public PermissionTypeFileOrgunitUser getUserInfos(@PathVariable String id, HttpSession session, HttpServletRequest request, ModelMap model){

        Users user=userRepository.findById(Long.parseLong(id)).get();
        return permissionRepository.findByidUsers(user);
    }

    @GetMapping("api/permissionfactory/{id}")
    public List<PermissionTypeFileOrgunitUser> getUsersByFactory(@PathVariable int id){
        Factory f=factoryRepository.findById(id).get();
        return permissionRepository.findByidFactory(f);
    }
    @GetMapping("api/permissionsout")
    public List<Users> getUsersWithOutPermissions(){
        List<Users>usersWithOut=new LinkedList<>();
        Iterable<Users> iterableUsers=userRepository.findAll();
        for(Users u:iterableUsers) {
            PermissionTypeFileOrgunitUser permissionTypeFileOrgunitUser=permissionRepository.findByidUsers(u);
            if (permissionTypeFileOrgunitUser==null) {
                usersWithOut.add(u);
            }
        }
        return usersWithOut;
    }

    @GetMapping("api/permissions/{rule}")
    public List<PermissionTypeFileOrgunitUser> getUsersByPermissions(@PathVariable int rule){
        Permissions rules=authorityRepository.findById(rule).get();
        return (List<PermissionTypeFileOrgunitUser>)permissionRepository.findByidPermission(rules);
        //return "lama";
    }

    @GetMapping("api/permissions")
    public List<PermissionTypeFileOrgunitUser> getUsersPermissions(){
        return (List<PermissionTypeFileOrgunitUser>)permissionRepository.findAll();
    }
    
    @PostMapping("api/login")
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
}
