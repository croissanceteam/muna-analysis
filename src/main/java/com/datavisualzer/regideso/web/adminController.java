package com.datavisualzer.regideso.web;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.constraints.Null;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.datavisualzer.regideso.models.DataExportation;
import com.datavisualzer.regideso.models.DataFile;
import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.models.Users;
import com.datavisualzer.regideso.repositories.DataExportRepository;
import com.datavisualzer.regideso.repositories.DataFileRepository;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.datavisualzer.regideso.repositories.UserRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Controller
public class adminController {

	private ApiClientController apiClientController=null;
	@Autowired
	private FactoryRepository factory;
	@Autowired
	private DataExportRepository dataExportRepository;
	
	@Autowired
	private UserRepository userRepository;
	private DataExportation dataExport;
	
	@Autowired
	private DataFileRepository dataFileRepository;
	
	@RequestMapping(value= {"admin","admins","adminstration"})
	private String RedirectHomeAdmin() {
		return "redirect:/admin/home";
	}
	@RequestMapping(value="admin/home")
	public String home(HttpServletRequest request,HttpSession session,ModelMap model) {
		if (session.getAttribute("uid")==null) {
			return "redirect:/";
		}else {
			if (!session.getAttribute("orgunitkey").toString().equals("rdc") && !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
			model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			//route="redirect:/dashboard/index.do";
			if (session.getAttribute("json_product")==null) {
				/*apiClientController=new ApiClientController();
				JsonNode jsonBase=apiClientController.getListMembership();
				session.setAttribute("json_product", jsonBase);
				model.put("onaJsonProductSize",jsonBase.size());
				*/
				List<DataFile>dataFiles=(List<DataFile>)dataFileRepository.findAll();
				session.setAttribute("json_product",dataFiles);
				model.put("onaJsonProductSize",dataFiles.size());
			}
		}
		return "views/admin/home";
	}
	
	@RequestMapping(value= {"admin/datasync","datasync"})
	public String datasync(HttpServletRequest request,HttpSession session,ModelMap model) {
		if (session.getAttribute("uid")==null) {
			return "redirect:/";
		}else {
			if (!session.getAttribute("orgunitkey").toString().equals("rdc") && !session.getAttribute("rule").toString().equals("superadmin")) {
				return "views/errors/error-403";
			}
			model.put("uid", session.getAttribute("uid").toString());
			model.put("username", session.getAttribute("username").toString());
			model.put("orgunitkey", session.getAttribute("orgunitkey").toString());
			model.put("orgunit", session.getAttribute("orgunit").toString());
			//route="redirect:/dashboard/index.do";
		}
		return "views/admin/datasync";
	}
	

	
	private List<Map<String, Object>>collectionDataOrgunit=null;
	private Map<String, Object>dataOrgunit=null;
	@RequestMapping(value= {"admin/datasyncprocess"},method=RequestMethod.POST,produces="application/json")
	@ResponseBody
	public String datasyncprocess(HttpServletRequest request,
			HttpSession session,
			HttpServletResponse response,
			@RequestParam String jsontext,
			@RequestParam String keyname,
			@RequestParam String datasize,
			@RequestParam String monthsend) throws IOException {
		
		Factory idOrgunit=factory.findBykeyentity(keyname);
		List<Factory>orgunitChilds=(List<Factory>) factory.findByidparent(idOrgunit);
		ObjectMapper mapData=new ObjectMapper();
		List<Map<String,String>> jsonDecode=mapData.readValue(jsontext,List.class);
		
		
		collectionDataOrgunit=new LinkedList<>();
		String yearExport = null;
		if (orgunitChilds.size()>0) {
			for (Factory iFactory : orgunitChilds) {
				dataOrgunit=new HashMap<String, Object>();
				collectionDataOrgunit=new LinkedList<>();
				
					
				List<Factory> internalList=(List<Factory>)factory.findByidparent(iFactory);
				if (internalList.size()>0) {
					for(Factory internalFactory:internalList) {
						for (Map<String, String> xjsonNode : jsonDecode) {
							if (internalFactory.getKeyentity().equals(xjsonNode.get("Usine").toLowerCase())) {
								dataOrgunit.put
										("week",
												xjsonNode.get("week")
										);
								dataOrgunit.put
								("aflc",
										xjsonNode.get("aflc")
								);
								dataOrgunit.put
								("chaux",
										xjsonNode.get("chaux")
								);
								dataOrgunit.put
								("Chlore",
										xjsonNode.get("Chlore")
								);
								dataOrgunit.put
								("Gasoil",
										xjsonNode.get("Gasoil")
								);
								dataOrgunit.put
								("Kwh",
										xjsonNode.get("Kwh")
								);
								dataOrgunit.put
								("Sel",
										xjsonNode.get("Sel")
								);
								dataOrgunit.put
								("Sulfate",
										xjsonNode.get("Sulfate")
								);
								dataOrgunit.put
								("year",
										xjsonNode.get("year")
								);
								dataOrgunit.put
								("Usine",
										xjsonNode.get("Usine").toLowerCase()
								);
								dataOrgunit.put
								("FactoryName",
										xjsonNode.get("FactoryName")
								);
								dataOrgunit.put("month", monthsend);
								collectionDataOrgunit.add(dataOrgunit);
								dataOrgunit=new HashMap<String, Object>();
								yearExport=xjsonNode.get("year").toString();
								
							}
						}
						try {
							
							Users user=userRepository.findById(Long.parseLong(session.getAttribute("uid").toString())).get();
							ObjectMapper mapString=new ObjectMapper();
							String dataJson=mapString.writeValueAsString(collectionDataOrgunit);
							dataExport=new DataExportation(0, new Date(),dataJson , user,false, internalFactory,dataJson.length(),Integer.parseInt(monthsend),Integer.parseInt(yearExport));
							DataExportation dataExportationFind=dataExportRepository.getExportOrgunit(internalFactory, Integer.parseInt(monthsend),Integer.parseInt(yearExport));
							if (dataExportationFind==null) {
								dataExportRepository.save(dataExport);
							}else {
								dataExportationFind.setContent(dataExport.getContent());
								dataExportationFind.setCronjob(false);
								dataExportationFind.setDatasize(dataJson.length());
								dataExportationFind.setDateexportation(new Date());
								dataExportationFind.setUserid(user);
								dataExportRepository.save(dataExportationFind);
								//dataExportRepository.Merge(new Date(), dataJson, user, false, dataJson.length(),Integer.parseInt(monthsend),iFactory);
							}
							
							collectionDataOrgunit.clear();
						} catch (Exception e) {
							return "403";
						}
						
					}
					//continue;
				
					
				}else {
					for (Map<String, String> ijsonNode : jsonDecode) {
						if (iFactory.getKeyentity().equals(ijsonNode.get("Usine").toLowerCase())) {
							dataOrgunit.put
									("week",
											ijsonNode.get("week")
									);
							dataOrgunit.put
							("aflc",
									ijsonNode.get("aflc")
							);
							dataOrgunit.put
							("chaux",
									ijsonNode.get("chaux")
							);
							dataOrgunit.put
							("Chlore",
									ijsonNode.get("Chlore")
							);
							dataOrgunit.put
							("Gasoil",
									ijsonNode.get("Gasoil")
							);
							dataOrgunit.put
							("Kwh",
									ijsonNode.get("Kwh")
							);
							dataOrgunit.put
							("Sel",
									ijsonNode.get("Sel")
							);
							dataOrgunit.put
							("Sulfate",
									ijsonNode.get("Sulfate")
							);
							dataOrgunit.put
							("year",
									ijsonNode.get("year")
							);
							dataOrgunit.put
							("Usine",
									ijsonNode.get("Usine").toLowerCase()
							);
							dataOrgunit.put
							("FactoryName",
									ijsonNode.get("FactoryName")
							);
							dataOrgunit.put("month", monthsend);
							collectionDataOrgunit.add(dataOrgunit);
							dataOrgunit=new HashMap<String, Object>();
							yearExport=ijsonNode.get("year").toString();
							
						}
					}
				}
				
				if (collectionDataOrgunit.size()>0) {
					try {
						
						Users user=userRepository.findById(Long.parseLong(session.getAttribute("uid").toString())).get();
						ObjectMapper mapString=new ObjectMapper();
						String dataJson=mapString.writeValueAsString(collectionDataOrgunit);
						dataExport=new DataExportation(0, new Date(),dataJson , user,false, iFactory,dataJson.length(),Integer.parseInt(monthsend),Integer.parseInt(yearExport));
						DataExportation dataExportationFind=dataExportRepository.getExportOrgunit(iFactory, Integer.parseInt(monthsend),Integer.parseInt(yearExport));
						if (dataExportationFind==null) {
							dataExportRepository.save(dataExport);
						}else {
							dataExportationFind.setContent(dataExport.getContent());
							dataExportationFind.setCronjob(false);
							dataExportationFind.setDatasize(dataJson.length());
							dataExportationFind.setDateexportation(new Date());
							dataExportationFind.setUserid(user);
							dataExportRepository.save(dataExportationFind);
							//dataExportRepository.Merge(new Date(), dataJson, user, false, dataJson.length(),Integer.parseInt(monthsend),iFactory);
						}
						
					} catch (Exception e) {
						return "403";
					}
				}
			
			}
		} else {
			dataOrgunit=new HashMap<String, Object>();
			collectionDataOrgunit=new LinkedList<>();
			
			for (Map<String, String> ijsonNode : jsonDecode) {
				
			
				
				if (idOrgunit.getKeyentity().equals(ijsonNode.get("Usine").toLowerCase())) {
					dataOrgunit.put
							("week",
									ijsonNode.get("week")
							);
					dataOrgunit.put
					("aflc",
							ijsonNode.get("aflc")
					);
					dataOrgunit.put
					("chaux",
							ijsonNode.get("chaux")
					);
					dataOrgunit.put
					("Chlore",
							ijsonNode.get("Chlore")
					);
					dataOrgunit.put
					("Gasoil",
							ijsonNode.get("Gasoil")
					);
					dataOrgunit.put
					("Kwh",
							ijsonNode.get("Kwh")
					);
					dataOrgunit.put
					("Sel",
							ijsonNode.get("Sel")
					);
					dataOrgunit.put
					("Sulfate",
							ijsonNode.get("Sulfate")
					);
					dataOrgunit.put
					("year",
							ijsonNode.get("year")
					);
					dataOrgunit.put
					("Usine",
							ijsonNode.get("Usine").toLowerCase()
					);
					dataOrgunit.put
					("FactoryName",
							ijsonNode.get("FactoryName")
					);
					dataOrgunit.put("month", monthsend);
					collectionDataOrgunit.add(dataOrgunit);
					dataOrgunit=new HashMap<String, Object>();
					yearExport=ijsonNode.get("year").toString();
				}
			}
			if (collectionDataOrgunit.size()>0) {
				try {
					
					Users user=userRepository.findById(Long.parseLong(session.getAttribute("uid").toString())).get();
					ObjectMapper mapString=new ObjectMapper();
					String dataJson=mapString.writeValueAsString(collectionDataOrgunit);
					dataExport=new DataExportation(0, new Date(),dataJson , user,false, idOrgunit,dataJson.length(),Integer.parseInt(monthsend),Integer.parseInt(yearExport));
					DataExportation dataExportationFind=dataExportRepository.getExportOrgunit(idOrgunit, Integer.parseInt(monthsend),Integer.parseInt(yearExport));
					if (dataExportationFind==null) {
						dataExportRepository.save(dataExport);
					}else {
						dataExportationFind.setContent(dataExport.getContent());
						dataExportationFind.setCronjob(false);
						dataExportationFind.setDatasize(dataJson.length());
						dataExportationFind.setDateexportation(new Date());
						dataExportationFind.setUserid(user);
						dataExportRepository.save(dataExportationFind);
						//dataExportRepository.Merge(new Date(), dataJson, user, false, dataJson.length(),Integer.parseInt(monthsend),iFactory);
					}
					
				} catch (Exception e) {
					return "403";
				}
			}
		}
		
		
		if (session.getAttribute("uid")!=null) {
		
		}else {
			return "404";
		}
		
		//return  collectionDataOrgunit;
		response.sendRedirect("/admin/datasync");
		
		return "views/admin/datasync";
	}
	
}
 