package com.croissancehub.muna.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.croissancehub.muna.models.Indicators;

import java.util.LinkedList;
import java.util.List;

public interface IndicatorRepository extends CrudRepository<Indicators, Integer> {
 Indicators findByindicatorname(String name);
 Indicators findBykeycode(String keycode);

 @Query("select i from Indicators i")
 LinkedList<Indicators> getIndicators();
}
