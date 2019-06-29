package com.croissancehub.muna.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.croissancehub.muna.models.MobileFunc;

public interface MobileFuncRepository extends CrudRepository<MobileFunc, Long> {

}
