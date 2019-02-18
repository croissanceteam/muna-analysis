package com.datavisualzer.regideso.repositories;

import java.util.List;

import javax.persistence.Column;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.datavisualzer.regideso.models.Factory;

public interface FactoryRepository extends CrudRepository<Factory,Integer>{
@Query("select f from Factory f where f.idparent=:id")
Iterable<Factory> findByidparent(@Param("id") Factory id);
@Query("select f from Factory f where f.keyentity=:key")
Factory findBykeyentity(@Param("key") String key); 
}
