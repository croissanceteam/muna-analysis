package com.croissancehub.muna.process;

import java.io.IOException;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.croissancehub.muna.models.DataExportation;
import com.croissancehub.muna.models.DataFile;
import com.croissancehub.muna.models.Factory;
import com.croissancehub.muna.models.orgunits;
import com.croissancehub.muna.repositories.DataExportRepository;
import com.croissancehub.muna.repositories.DataFileRepository;
import com.croissancehub.muna.repositories.FactoryRepository;
import com.croissancehub.muna.repositories.IndicatorRepository;
import com.croissancehub.muna.repositories.TypeFileRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;

public class Scheduler {

    String values="";
    public String runTaskCronJob
    (
        List<DataExportation> exports,
        IndicatorRepository indicatorRepository,
        DataFileRepository dataFileRepository,
        DataExportRepository dataExportRepository
        ) {
        int counter=0;
      //  values =indicatorRepository.findBykeycode("aflc").getIndicatorname();
        for(DataExportation data:exports){
            
            String dataString=data.getContent();
            List<Map<String,Object>> jsonDecode=new LinkedList<>();
            ObjectMapper mapper=new ObjectMapper();
             
            try {
                jsonDecode = (List<Map<String, Object>>) mapper.readValue(dataString, List.class);
                for (Map mapData:jsonDecode) {
                   // values=mapData.get("aflc").toString();
                    for(int i=0;i<mapData.keySet().size();i++){
                        DataFile dataFile=new DataFile();
                        dataFile.setDatestorage(new Date());
                        dataFile.setDatesubmissions(data.getDateexportation());
                        dataFile.setMonth(Integer.toString(data.getMonthcollect()));
                        dataFile.setTypefileid(366269);
                        dataFile.setYear(data.getYear());
                        dataFile.setOrgunitid(data.getOrgunitid());
                        dataFile.setDataExportation
                        (
                            dataExportRepository.findById(data.getId()).get()
                        );
                     
                        String keyCode=mapData.entrySet().toArray()[i].toString().split("=")[0];
                        String keyCodeValue=mapData.entrySet().toArray()[i].toString().split("=")[1];
                        if (indicatorRepository.findBykeycode(keyCode.toLowerCase())!=null) {
                            dataFile.setIndicatorid
                            (
                                indicatorRepository.findBykeycode
                                (
                                    keyCode.toLowerCase()
                                )
                            );
                        dataFile.setIndicatorvalue(keyCodeValue);
                        dataFileRepository.save(dataFile);
                        
                        
                        
                      
                    }else if(indicatorRepository.findByindicatorname(keyCode.toLowerCase())!=null){
                           dataFile.setIndicatorid
                            (
                                indicatorRepository.findByindicatorname
                                (
                                    keyCode.toLowerCase()
                                )
                            );
                        dataFile.setIndicatorvalue(keyCodeValue);
                        dataFileRepository.save(dataFile);
                        
                        
                    }else{
                        values+=keyCode+"<br/>";
                    }

                }
                
                }
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            
            data.setCronjob(Boolean.TRUE);
            dataExportRepository.save(data);
           
        }
        return values;
    }
    
}