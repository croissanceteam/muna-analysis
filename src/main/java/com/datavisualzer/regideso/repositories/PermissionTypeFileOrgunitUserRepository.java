package com.datavisualzer.regideso.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.models.PermissionTypeFileOrgunitUser;
import com.datavisualzer.regideso.models.Permissions;
import com.datavisualzer.regideso.models.Users;

public interface PermissionTypeFileOrgunitUserRepository extends CrudRepository<PermissionTypeFileOrgunitUser,Long> {
 @Query("select p from PermissionTypeFileOrgunitUser p where p.idPermission=:id")
 List<PermissionTypeFileOrgunitUser>findByidPermission(@Param("id") Permissions p);
 
 PermissionTypeFileOrgunitUser findByidUsers(Users u);
 
 List<PermissionTypeFileOrgunitUser>findByidFactory(Factory f);

}
