package com.datavisualzer.regideso.web;



import java.awt.Stroke;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.security.Provider.Service;
import java.util.HashMap;
import java.util.Map;

import javax.net.ssl.HttpsURLConnection;
import javax.print.attribute.standard.Severity;

import org.apache.commons.collections4.Get;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.gson.GsonAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.datavisualzer.regideso.models.DataFile;
import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.models.Indicators;
import com.datavisualzer.regideso.models.TypeFile;
import com.datavisualzer.regideso.models.orgunits;
import com.datavisualzer.regideso.repositories.DataFileRepository;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.datavisualzer.regideso.repositories.IndicatorRepository;
import com.datavisualzer.regideso.repositories.TypeFileRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy;
import org.springframework.web.client.RestTemplate;

@RestController
public class ApiClientController {

	private URL urlClient=null;
	private HttpURLConnection httpCnx=null;
	private URLConnection cnx=null;
	private String response="";
	private JsonNode jsonNode=null;
	
	@Autowired
	private FactoryRepository FactoryRepository;
	private Factory factory=null;
	
	@Autowired
	private IndicatorRepository indicatorRepository;
	private Indicators indicators=null;
	
	@Autowired
	private TypeFileRepository typeFileRepository;
	private TypeFile typeFile=null; 
	private Map<String, DataFile> mapDataFile=null;
	
	@RequestMapping(value="api/datasync/town/{town}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByProvince(@PathVariable String town) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\"dp_prd_chq\":\""+town+"\"}") ;
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	
	@RequestMapping(value="api/datasync/town/{town}/{month}/{year}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByProvince(@PathVariable String town,@PathVariable String month,@PathVariable String year) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\"dp_prd_chq\":\""+town+"\",\"mois_prd_chq\":\""+month+"\",\"year_prd_chq\":\""+year+"\"}") ;
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	
	@RequestMapping(value="api/datasync/town/month/{town}/{month}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByProvinceMonth(@PathVariable String town,@PathVariable String month) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\"dp_prd_chq\":\""+town+"\",\"mois_prd_chq\":\""+month+"\"}") ;
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	@RequestMapping(value="api/datasync/town/year/{town}/{year}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByProvinceYear(@PathVariable String town,@PathVariable String year) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\"dp_prd_chq\":\""+town+"\",\"year_prd_chq\":\""+year+"\"}") ;
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	
	@RequestMapping(value="api/datasync/{town}/{factory}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByFactory(@PathVariable String town,@PathVariable String factory) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\""+town+"\":\""+factory+"\"}") ;
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	
	
	@RequestMapping(value="api/datasync/{town}/{factory}/{month}/{year}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByFactory(@PathVariable String town,@PathVariable String factory,@PathVariable String month,@PathVariable String year) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\""+town+"\":\""+factory+"\",\"mois_prd_chq\":\""+month+"\",\"year_prd_chq\":\""+year+"\"}"); ;
			
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	
	@RequestMapping(value="api/datasync/year/{town}/{factory}/{year}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByFactoryYear(@PathVariable String town,@PathVariable String factory,@PathVariable String year) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\""+town+"\":\""+factory+"\",\"year_prd_chq\":\""+year+"\"}"); ;
			
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	
	@RequestMapping(value="api/datasync/month/{town}/{factory}/{month}",method=RequestMethod.GET,produces="application/json")
	public JsonNode getDataSyncByFactoryMonth(@PathVariable String town,@PathVariable String factory,@PathVariable String month) {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={\""+town+"\":\""+factory+"\",\"mois_prd_chq\":\""+month+"\"}");
			
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return jsonNode;
	}
	
	@RequestMapping(value="api/datasync/alls",method=RequestMethod.GET,produces="application/json")
	public String getListMembership() {
		String response="";
		try {
		
			System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
			URL url = new URL("https://api.ona.io/api/v1/data/366269?query={%22dp_prd_chq%22:%22kin%22}") ;
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));
			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				response+=output;
			}
			conn.disconnect();
			 //Gson gson;
				ObjectMapper mapper=new ObjectMapper();
				jsonNode=mapper.readTree(response);
			//	String orgunitName=jsonNode.get(0).get("ctr_kin").textValue();
			//	factory=FactoryRepository.findBykeyentity(orgunitName);
				

				
			//Map<String,String> data=gson.fromJson(response, Map.class);
           // httpCnx.disconnect();
		} catch (Exception e) {
			response="Exception:"+e.getMessage();
		}
		//DataFile dataFile=new DataFile();
		//dataFile.setOrgunitid(factory);
		return response;
	}
	@RequestMapping(value="service",method=RequestMethod.GET)
	@ResponseBody
	public String getService() {
		RestClient restClient=new RestClient();
		return restClient.get("https://api.ona.io/api/v1/data/366269");
	}
}
