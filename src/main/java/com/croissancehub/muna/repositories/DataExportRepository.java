
package com.croissancehub.muna.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.croissancehub.muna.models.DataExportation;
import com.croissancehub.muna.models.Factory;
import com.croissancehub.muna.models.Users;

public interface DataExportRepository extends CrudRepository<DataExportation, Integer> {
	
	@Query("select exp from DataExportation exp join Factory entity on exp.orgunitid.id=entity.id and entity.idparent.id=2")
	List<DataExportation> getFactoryDefault();
	
	
	@Query("select exp from DataExportation exp join Factory entity on exp.orgunitid.id=entity.id and entity=:org and exp.year=:year")
	List<DataExportation> getDataExportation(@Param("org") Factory org,int year);
	
	
	
	@Query("select data from DataExportation data where data.orgunitid=:org and data.monthcollect=:month and data.year=:year")
	DataExportation getExportOrgunit(@Param("org") Factory org, @Param("month") int month,@Param("year") int year);
	
	@Query("select data from DataExportation data where data.year=:year")
	List<DataExportation> getExportDatas(@Param("year") int year);


	@Query("select data from DataExportation data join Factory org on data.orgunitid=org.id where data.year=:year  and org.idparent=:org")
	List<DataExportation> getExportDatasByParentOrgunit(@Param("year") int year,@Param("org") Factory org);

	
	List<DataExportation> findBycronjob(@Param("cronjob") Boolean cronjob);
}
