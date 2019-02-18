package com.datavisualzer.regideso.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.datavisualzer.regideso.models.PermissionTypeFileOrgunitUser;
import com.datavisualzer.regideso.models.Permissions;

public interface PermissionRepository extends CrudRepository<Permissions, Integer>{
    //@Query("select p from Permissions p where p.role=:role")
    Permissions findByRole(String role);
}
