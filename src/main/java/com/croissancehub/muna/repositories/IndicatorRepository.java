package com.croissancehub.muna.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.croissancehub.muna.models.Indicators;

import java.util.LinkedList;
import java.util.List;

public interface IndicatorRepository extends CrudRepository<Indicators, Integer> {
 Indicators findByindicatorname(String name);

 @Query("select i from Indicators i where i.keycode=:keycode")
 Indicators findBykeycode(@Param("keycode") String keycode);

 @Query("select i from Indicators i")
 LinkedList<Indicators> getIndicators();
}
