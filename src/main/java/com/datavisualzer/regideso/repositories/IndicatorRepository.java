package com.datavisualzer.regideso.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.LinkedList;
import java.util.List;

import com.datavisualzer.regideso.models.Indicators;

public interface IndicatorRepository extends CrudRepository<Indicators, Integer> {
 Indicators findByindicatorname(String name);
 Indicators findBykeycode(String keycode);

 @Query("select i from Indicators i")
 LinkedList<Indicators> getIndicators();
}
