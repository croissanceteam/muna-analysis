package com.croissancehub.muna.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.croissancehub.muna.models.TypeFileIndicators;

import java.util.LinkedList;

public interface TypeFileIndicatorRepository extends CrudRepository<TypeFileIndicators,Integer>{

    @Query("select t from TypeFileIndicators t")
    LinkedList<TypeFileIndicators> getTypeFileIndicator();

    @Query("select t from TypeFileIndicators t where t.idtypefile.status=:status")
    LinkedList<TypeFileIndicators> getTypeFileIndicatorByStatus(@Param("status") String status);

    @Query("select t from TypeFileIndicators t where t.idindicator.id=:id")
    TypeFileIndicators getOneTypeFileIndicator(@Param("id") int id);

    @Query("select t from TypeFileIndicators t where t.idtypefile.id=:id")
    LinkedList<TypeFileIndicators> getTypeFileIndicatorByIdTypefile(@Param("id") int id);
}
