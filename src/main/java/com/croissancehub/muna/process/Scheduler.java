package com.croissancehub.muna.process;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.croissancehub.muna.models.DataExportation;
import com.croissancehub.muna.repositories.DataExportRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;

public class Scheduler {

    @Autowired
    private DataExportRepository dataExportRepository;

    public Boolean runTaskCronJob() {
        int counter=0;
        List<DataExportation> exports=dataExportRepository.findBycronjob(Boolean.parseBoolean("0"));
        for(DataExportation data:exports){
            String dataString=data.getContent();
            List<Map<String,Object>> jsonDecode=new LinkedList<>();
            ObjectMapper mapper=new ObjectMapper();
            
            try {
                jsonDecode = (List<Map<String, Object>>) mapper.readValue(dataString, List.class);
                for (Map mapData : jsonDecode) {
                    System.out.println(mapData.get("Gasoil").toString());
                }
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            
            
        }
        return true;
    }
    
}