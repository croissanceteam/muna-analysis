package com.croissancehub.muna.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.croissancehub.muna.models.PermissionTypeFileOrgunitUser;
import com.croissancehub.muna.models.Permissions;

public interface PermissionRepository extends CrudRepository<Permissions, Integer>{
    //@Query("select p from Permissions p where p.role=:role")
    Permissions findByRole(String role);
}
