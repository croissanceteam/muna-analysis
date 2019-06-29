package com.croissancehub.muna.api;

import com.croissancehub.muna.models.DataExportation;
import com.croissancehub.muna.models.Factory;
import com.croissancehub.muna.repositories.DataExportRepository;
import com.croissancehub.muna.repositories.FactoryRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api/dashboard/")
public class AnalysisApi {
    private FactoryRepository factoryRepository;
    private DataExportRepository dataExportRepository;
    private final static int YEAR= Calendar.getInstance().get(Calendar.YEAR);

    public AnalysisApi(FactoryRepository factory,DataExportRepository dataexport){
        this.factoryRepository=factory;
        this.dataExportRepository=dataexport;
    }

    @GetMapping("/default")
    public List<DataExportation> viewDashboard() {
        return dataExportRepository.getFactoryDefault();
    }

    @GetMapping("/{town}")
    public List<DataExportation>viewDashboardByTown(@PathVariable String town){
        List<DataExportation>exportations=new LinkedList<>();
        Factory org=factoryRepository.findBykeyentity(town);
        List<Factory>factories=(List<Factory>)factoryRepository.findByidparent(org);
        List<Factory>factories2=new LinkedList<>();
        for(Factory f:factories) {
            if (((List<Factory>)factoryRepository.findByidparent(f)).size()==0) {
                for(
                        DataExportation dataExportation:
                        dataExportRepository.getDataExportation(f,2018)
                ) {
                    exportations.add(dataExportation);

                }
            } else {
                for(Factory fChild:factoryRepository.findByidparent(f)) {
                    factories2.add(fChild);
                    for(
                            DataExportation dataExportation:
                            dataExportRepository.getDataExportation(fChild,2018)
                    ) {
                        exportations.add(dataExportation);

                    }
                }
            }
        }

        return exportations;
    }

    @GetMapping("/{town}/{year}")
    public List<DataExportation>viewDashboardByTownAndYear(@PathVariable String town,@PathVariable String year){
        List<DataExportation>exportations=new LinkedList<>();
        Factory org=factoryRepository.findBykeyentity(town);
        List<Factory>factories=(List<Factory>)factoryRepository.findByidparent(org);
        List<Factory>factories2=new LinkedList<>();
        for(Factory f:factories) {
            if (((List<Factory>)factoryRepository.findByidparent(f)).size()==0) {
                for(
                        DataExportation dataExportation:
                        dataExportRepository.getDataExportation(f,Integer.parseInt(year))
                ) {
                    exportations.add(dataExportation);

                }
            } else {
                for(Factory fChild:factoryRepository.findByidparent(f)) {
                    factories2.add(fChild);
                    for(
                            DataExportation dataExportation:
                            dataExportRepository.getDataExportation(fChild,Integer.parseInt(year))
                    ) {
                        exportations.add(dataExportation);

                    }
                }
            }
        }

        return exportations;
    }

    @GetMapping("/export/data/{year}")
    public List<Map<String,Object>>viewDashboardCountry(@PathVariable String year){
        int y=Integer.parseInt(year);
        List<Map<String,Object>>dataCountry=new LinkedList<>();

        Factory org=factoryRepository.findById(1).get();
        List<Factory> provinces=(List)factoryRepository.findByidparent(org);
        for (Factory f_1 : provinces) {
            Map<String,Object> dataByProvince=new HashMap<>();
            int agfl=0,chaux=0,chlr=0,gas=0,kwh=0,sel=0,slf=0;
            List<Factory> usines_1=(List)factoryRepository.findByidparent(f_1);
            for (Factory f_2 : usines_1) {
                List<Factory> usines_2=(List)factoryRepository.findByidparent(f_2);
                if (usines_2.size()==0) {


                    List<DataExportation> dataExportations = dataExportRepository.getDataExportation(f_2, y);
                    for (DataExportation exp : dataExportations) {
                        ObjectMapper deserialize = new ObjectMapper();
                        try {
                            List<Map<String, String>> dataJSON = (List<Map<String, String>>) deserialize
                                    .readValue(exp.getContent(), List.class);
                            for (Map dataMonth : dataJSON) {
                                agfl+=Integer.parseInt(dataMonth.get("aflc").toString());
                                chaux+=Integer.parseInt(dataMonth.get("chaux").toString());
                                chlr+=Integer.parseInt(dataMonth.get("Chlore").toString());
                                gas+=Integer.parseInt(dataMonth.get("Gasoil").toString());
                                kwh+=Integer.parseInt(dataMonth.get("Kwh").toString());
                                sel+=Integer.parseInt(dataMonth.get("Sel").toString());
                                slf+=Integer.parseInt(dataMonth.get("Sulfate").toString());
                            }
                        } catch (JsonParseException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } catch (JsonMappingException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } catch (IOException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        }
                    }

                } else {
                    for(Factory f_3:usines_2){

                        List<DataExportation> dataExportations = dataExportRepository.getDataExportation(f_3, y);
                        for (DataExportation exp : dataExportations) {
                            ObjectMapper deserialize = new ObjectMapper();
                            try {
                                List<Map<String, String>> dataJSON = (List<Map<String, String>>) deserialize
                                        .readValue(exp.getContent(), List.class);
                                for (Map dataMonth : dataJSON) {
                                    agfl+=Integer.parseInt(dataMonth.get("aflc").toString());
                                    chaux+=Integer.parseInt(dataMonth.get("chaux").toString());
                                    chlr+=Integer.parseInt(dataMonth.get("Chlore").toString());
                                    gas+=Integer.parseInt(dataMonth.get("Gasoil").toString());
                                    kwh+=Integer.parseInt(dataMonth.get("Kwh").toString());
                                    sel+=Integer.parseInt(dataMonth.get("Sel").toString());
                                    slf+=Integer.parseInt(dataMonth.get("Sulfate").toString());
                                }
                            } catch (JsonParseException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            } catch (JsonMappingException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            } catch (IOException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            }
                        }
                    }
                }
            }
            double aggregation=agfl+chaux+chlr+gas+kwh+sel+slf;
            dataByProvince.put("province", f_1.getLabelentity());
            dataByProvince.put("agefloc", agfl);
            dataByProvince.put("chlore", chlr);
            dataByProvince.put("chaux", chaux);
            dataByProvince.put("gasoil", gas);
            dataByProvince.put("kwh", kwh);
            dataByProvince.put("sel", sel);
            dataByProvince.put("sulfate", slf);
            dataCountry.add(dataByProvince);



        }
        return dataCountry;
    }

    @GetMapping("/export/data")
    public List<Map<String,Object>>viewDashboardCountry(){

        int y=Calendar.getInstance().get(Calendar.YEAR);
        List<Map<String,Object>>dataCountry=new LinkedList<>();

        Factory org=factoryRepository.findById(1).get();
        List<Factory> provinces=(List)factoryRepository.findByidparent(org);
        for (Factory f_1 : provinces) {
            Map<String,Object> dataByProvince=new HashMap<>();
            int agfl=0,chaux=0,chlr=0,gas=0,kwh=0,sel=0,slf=0;
            List<Factory> usines_1=(List)factoryRepository.findByidparent(f_1);
            for (Factory f_2 : usines_1) {
                List<Factory> usines_2=(List)factoryRepository.findByidparent(f_2);
                if (usines_2.size()==0) {


                    List<DataExportation> dataExportations = dataExportRepository.getDataExportation(f_2, y);
                    for (DataExportation exp : dataExportations) {
                        ObjectMapper deserialize = new ObjectMapper();
                        try {
                            List<Map<String, String>> dataJSON = (List<Map<String, String>>) deserialize
                                    .readValue(exp.getContent(), List.class);
                            for (Map dataMonth : dataJSON) {
                                agfl+=Integer.parseInt(dataMonth.get("aflc").toString());
                                chaux+=Integer.parseInt(dataMonth.get("chaux").toString());
                                chlr+=Integer.parseInt(dataMonth.get("Chlore").toString());
                                gas+=Integer.parseInt(dataMonth.get("Gasoil").toString());
                                kwh+=Integer.parseInt(dataMonth.get("Kwh").toString());
                                sel+=Integer.parseInt(dataMonth.get("Sel").toString());
                                slf+=Integer.parseInt(dataMonth.get("Sulfate").toString());
                            }
                        } catch (JsonParseException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } catch (JsonMappingException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } catch (IOException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        }
                    }

                } else {
                    for(Factory f_3:usines_2){

                        List<DataExportation> dataExportations = dataExportRepository.getDataExportation(f_3, y);
                        for (DataExportation exp : dataExportations) {
                            ObjectMapper deserialize = new ObjectMapper();
                            try {
                                List<Map<String, String>> dataJSON = (List<Map<String, String>>) deserialize
                                        .readValue(exp.getContent(), List.class);
                                for (Map dataMonth : dataJSON) {
                                    agfl+=Integer.parseInt(dataMonth.get("aflc").toString());
                                    chaux+=Integer.parseInt(dataMonth.get("chaux").toString());
                                    chlr+=Integer.parseInt(dataMonth.get("Chlore").toString());
                                    gas+=Integer.parseInt(dataMonth.get("Gasoil").toString());
                                    kwh+=Integer.parseInt(dataMonth.get("Kwh").toString());
                                    sel+=Integer.parseInt(dataMonth.get("Sel").toString());
                                    slf+=Integer.parseInt(dataMonth.get("Sulfate").toString());
                                }
                            } catch (JsonParseException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            } catch (JsonMappingException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            } catch (IOException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            }
                        }
                    }
                }
            }
            double aggregation=agfl+chaux+chlr+gas+kwh+sel+slf;
            dataByProvince.put("province", f_1.getLabelentity());
            dataByProvince.put("agefloc", agfl);
            dataByProvince.put("chlore", chlr);
            dataByProvince.put("chaux", chaux);
            dataByProvince.put("gasoil", gas);
            dataByProvince.put("kwh", kwh);
            dataByProvince.put("sel", sel);
            dataByProvince.put("sulfate", slf);
            dataCountry.add(dataByProvince);



        }
        return dataCountry;
    }

    @GetMapping("/geo/{year}")
    public List<List<Object>> viewDashboardDatageo(@PathVariable String year){
        int y=Integer.parseInt(year);
        List<List<Object>>geoData=new LinkedList<>();

        Factory org=factoryRepository.findById(1).get();
        List<Factory> provinces=(List)factoryRepository.findByidparent(org);
        for (Factory f_1 : provinces) {
            List<Object>orgDataGeo=new LinkedList<>();
            int agfl=0,chaux=0,chlr=0,gas=0,kwh=0,sel=0,slf=0;
            List<Factory> usines_1=(List)factoryRepository.findByidparent(f_1);
            for (Factory f_2 : usines_1) {
                List<Factory> usines_2=(List)factoryRepository.findByidparent(f_2);
                if (usines_2.size()==0) {


                    List<DataExportation> dataExportations = dataExportRepository.getDataExportation(f_2, y);
                    for (DataExportation exp : dataExportations) {
                        ObjectMapper deserialize = new ObjectMapper();
                        try {
                            List<Map<String, String>> dataJSON = (List<Map<String, String>>) deserialize
                                    .readValue(exp.getContent(), List.class);
                            for (Map dataMonth : dataJSON) {
                                agfl+=Integer.parseInt(dataMonth.get("aflc").toString());
                                chaux+=Integer.parseInt(dataMonth.get("chaux").toString());
                                chlr+=Integer.parseInt(dataMonth.get("Chlore").toString());
                                gas+=Integer.parseInt(dataMonth.get("Gasoil").toString());
                                kwh+=Integer.parseInt(dataMonth.get("Kwh").toString());
                                sel+=Integer.parseInt(dataMonth.get("Sel").toString());
                                slf+=Integer.parseInt(dataMonth.get("Sulfate").toString());
                            }
                        } catch (JsonParseException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } catch (JsonMappingException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } catch (IOException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        }
                    }

                } else {
                    for(Factory f_3:usines_2){

                        List<DataExportation> dataExportations = dataExportRepository.getDataExportation(f_3, y);
                        for (DataExportation exp : dataExportations) {
                            ObjectMapper deserialize = new ObjectMapper();
                            try {
                                List<Map<String, String>> dataJSON = (List<Map<String, String>>) deserialize
                                        .readValue(exp.getContent(), List.class);
                                for (Map dataMonth : dataJSON) {
                                    agfl+=Integer.parseInt(dataMonth.get("aflc").toString());
                                    chaux+=Integer.parseInt(dataMonth.get("chaux").toString());
                                    chlr+=Integer.parseInt(dataMonth.get("Chlore").toString());
                                    gas+=Integer.parseInt(dataMonth.get("Gasoil").toString());
                                    kwh+=Integer.parseInt(dataMonth.get("Kwh").toString());
                                    sel+=Integer.parseInt(dataMonth.get("Sel").toString());
                                    slf+=Integer.parseInt(dataMonth.get("Sulfate").toString());
                                }
                            } catch (JsonParseException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            } catch (JsonMappingException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            } catch (IOException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            }
                        }
                    }
                }
            }
            double aggregation=agfl+chaux+chlr+gas+kwh+sel+slf;
            switch (f_1.getLabelentity().toLowerCase()) {
                case "kongo central":
                    orgDataGeo.add("Bas-Congo");
                    break;
                case "province orientale":
                    orgDataGeo.add("Orientale");
                    break;
                default:
                    orgDataGeo.add(f_1.getLabelentity());
                    break;
            }

            orgDataGeo.add(aggregation);
            orgDataGeo.add
                    (
                            "<br/>Agefloc="+agfl+"<br/>Chaux="+chaux+"<br/>Chlore="+chlr+"<br/>Gasoil="+gas+
                                    "<br/>KWH="+kwh+"<br/>Sel="+sel+"<br/>Sulfate="+slf
                    );


            geoData.add(orgDataGeo);


        }
        return geoData;
    }
    
}
