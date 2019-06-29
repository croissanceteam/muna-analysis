package com.croissancehub.muna.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.croissancehub.muna.models.PrivilegeMobile;
import com.croissancehub.muna.models.Users;

public interface PrivilegeMobileRepository extends CrudRepository<PrivilegeMobile, Long> {

	@Query("select p.idfunc from PrivilegeMobile p where p.iduser=:id")
    List<PrivilegeMobile> findPrivilegeByiduser(@Param("id")Users iduser);
	
}
