package com.datavisualzer.regideso.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Calendar;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import com.datavisualzer.regideso.models.DataExportation;
import com.datavisualzer.regideso.process.ExportFile;
import com.datavisualzer.regideso.repositories.DataExportRepository;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class ExportController {

	public static String FILNAME;
	private final static String USINES="kin,kng,bdd,kat,eqt,kao,kac,nkv,skv,por,man";
	@Autowired
	private FactoryRepository factoryRepository;
	@Autowired
	private DataExportRepository dataExportRepository;
	private String result;
	@RequestMapping(value= {"/export/exportdataraw"},method=RequestMethod.POST,produces="application/json")
	@ResponseBody
	public StreamingResponseBody exportDataRaw
	(
			@RequestParam String datajson,
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam String year
	) {
		ObjectMapper mapData=new ObjectMapper();
		
		try {
			int y=(year.split(",")[0]==null?Integer.parseInt(year):Integer.parseInt(year.split(",")[0]));
			List<Map<String,Object>> jsonDecode=new LinkedList<>();
			List<DataExportation>exportDatas=dataExportRepository.getExportDatas(y);
			for(DataExportation data:exportDatas) {
				String formatJSON=data.getContent();
				List<Map<String,Object>> arrayJSON=(List<Map<String,Object>>)mapData.readValue(formatJSON,List.class);
				for(Map map:arrayJSON) {
					jsonDecode.add(map);
				}
			}
			
			result=new ExportFile().getDataFileOrgunit(factoryRepository, jsonDecode);
			if (!result.equals("No result")) {
				response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
				response.setHeader("Content-Disposition", "attachment; filename="+result);
				InputStream inputStream = new FileInputStream(new File(result));
			
				return outputStream -> {
				    int nRead;
				    byte[] data = new byte[1024];
				    while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
				        System.out.println("Writing some bytes of file...");
				        outputStream.write(data, 0, nRead);
				    }
				};
			}else {
				try {
					response.sendRedirect("https://www.google.cd");
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			//return e.getMessage();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			//return e.getMessage();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			//return e.getMessage();
		}
	
		return null;
	}
	@RequestMapping(value="/download/excel",method=RequestMethod.GET)
	public StreamingResponseBody getExcel(HttpServletResponse response) throws IOException {
		response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
		response.setHeader("Content-Disposition", "attachment; filename="+result);
		Workbook workbook = new XSSFWorkbook();
		 
		Sheet sheet = workbook.createSheet("Persons");
		sheet.setColumnWidth(0, 6000);
		sheet.setColumnWidth(1, 4000);
		 
		Row header = sheet.createRow(0);
		 
		CellStyle headerStyle = workbook.createCellStyle();
		headerStyle.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex());
		headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		 
		XSSFFont font = ((XSSFWorkbook) workbook).createFont();
		font.setFontName("Arial");
		font.setFontHeightInPoints((short) 16);
		font.setBold(true);
		headerStyle.setFont(font);
		 
		Cell headerCell = header.createCell(0);
		headerCell.setCellValue("Name");
		headerCell.setCellStyle(headerStyle);
		 
		headerCell = header.createCell(1);
		headerCell.setCellValue("Age");
		headerCell.setCellStyle(headerStyle);
		File currDir = new File(".");
		String path = currDir.getAbsolutePath();
		String fileLocation = path.substring(0, path.length() - 1) + "temp.xlsx";
		 
		FileOutputStream outputStream = new FileOutputStream(fileLocation);
		workbook.write(outputStream);
		workbook.close();
		return (StreamingResponseBody) outputStream;
	}
}
