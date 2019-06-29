package com.croissancehub.muna.api;

import com.croissancehub.muna.models.Factory;
import com.croissancehub.muna.models.PermissionTypeFileOrgunitUser;
import com.croissancehub.muna.models.Permissions;
import com.croissancehub.muna.models.Users;
import com.croissancehub.muna.process.CryptoSHA512;
import com.croissancehub.muna.repositories.FactoryRepository;
import com.croissancehub.muna.repositories.PermissionRepository;
import com.croissancehub.muna.repositories.PermissionTypeFileOrgunitUserRepository;
import com.croissancehub.muna.repositories.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import javassist.expr.NewArray;

import org.apache.commons.collections4.map.HashedMap;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.security.NoSuchAlgorithmException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/userapi")
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
    @GetMapping("/userinfos/{id}")
    public PermissionTypeFileOrgunitUser getUserInfos(@PathVariable String id, HttpSession session, HttpServletRequest request, ModelMap model){

        Users user=userRepository.findById(Long.parseLong(id)).get();
        return permissionRepository.findByidUsers(user);
    }

    @GetMapping("/permissionfactory/{id}")
    public List<PermissionTypeFileOrgunitUser> getUsersByFactory(@PathVariable int id){
        Factory f=factoryRepository.findById(id).get();
        return permissionRepository.findByidFactory(f);
    }
    @GetMapping("/permissionsout")
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

    @GetMapping("/permissions/{rule}")
    public List<PermissionTypeFileOrgunitUser> getUsersByPermissions(@PathVariable int rule){
        Permissions rules=authorityRepository.findById(rule).get();
        return (List<PermissionTypeFileOrgunitUser>)permissionRepository.findByidPermission(rules);
        //return "lama";
    }

    @GetMapping("/permissions")
    public List<PermissionTypeFileOrgunitUser> getUsersPermissions(){
        return (List<PermissionTypeFileOrgunitUser>)permissionRepository.findAll();
    }
    

}
