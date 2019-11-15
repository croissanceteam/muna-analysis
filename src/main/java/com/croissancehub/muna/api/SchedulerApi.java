package com.croissancehub.muna.api;

import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.croissancehub.muna.models.DataExportation;
import com.croissancehub.muna.process.Scheduler;
import com.croissancehub.muna.repositories.DataExportRepository;
import com.croissancehub.muna.repositories.DataFileRepository;
import com.croissancehub.muna.repositories.IndicatorRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * SchedulerApi
 */
@RestController
@RequestMapping("api/scheduler/")
public class SchedulerApi {

    @Autowired
    private DataExportRepository dataExportRepository;
    @Autowired
    private IndicatorRepository indicatorRepository;
    @Autowired
    private DataFileRepository dataFileRepository;

    @GetMapping("run")
    public List<DataExportation> dataToClean(){
     
        Scheduler scheduler=new Scheduler();
        List<DataExportation> dataFound=dataExportRepository.findBycronjob(Boolean.parseBoolean("0"));
       String valeur= scheduler.runTaskCronJob(dataFound,indicatorRepository,dataFileRepository,dataExportRepository);
      // return valeur;
        return dataFound;
    }
    
}