package com.datavisualzer.regideso.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.LinkedList;
import java.util.List;

import com.datavisualzer.regideso.models.TypeFile;

public interface TypeFileRepository extends CrudRepository<TypeFile, Integer> {
	
	TypeFile findByid(int id);
	@Query("Select t from TypeFile t")
	Iterable<TypeFile>FindAlls();
	@Query("select t from TypeFile t where t.status=:status")
	LinkedList<TypeFile> findBystatus(@Param("status") String status);
}
