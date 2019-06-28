package com.datavisualzer.regideso.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.datavisualzer.regideso.models.PrivilegeMobile;
import com.datavisualzer.regideso.models.Users;

public interface PrivilegeMobileRepository extends CrudRepository<PrivilegeMobile, Long> {

	@Query("select p.idfunc from PrivilegeMobile p where p.iduser=:id")
    List<PrivilegeMobile> findPrivilegeByiduser(@Param("id")Users iduser);
	
}
