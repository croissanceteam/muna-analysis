package com.datavisualzer.regideso.process;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.datavisualzer.regideso.models.Factory;
import com.datavisualzer.regideso.models.orgunits;
import com.datavisualzer.regideso.repositories.FactoryRepository;
import com.datavisualzer.regideso.web.ExportController;

public class ExportFile {
	private Workbook wb=null;
	private Font font=null;
	private Sheet sheet=null;
	private ExportTypeFile exportTypeFile;
	
	public String getDataFileOrgunit(FactoryRepository factoryRepository,List<Map<String, Object>> listJSON) throws IOException {
		String fullpath="";

			List<orgunits>IOrgunits=new LinkedList<>();
			Factory factory1=factoryRepository.findById(1).get();
			Iterable<Factory> iFactories=factoryRepository.findByidparent(factory1);
			int rowNum=1;
			Workbook workbook = new XSSFWorkbook();
	        Font headerFont = workbook.createFont();
	        headerFont.setBold(true);
	        headerFont.setFontHeightInPoints((short) 11);
	        headerFont.setColor(IndexedColors.BLACK.getIndex());
	        CellStyle headerCellStyle = workbook.createCellStyle();
	        headerCellStyle.setFont(headerFont);
			for (Factory factory : iFactories) {
				int id2=factory.getId();
				Sheet sheet = workbook.createSheet(factory.getLabelentity());
				Row headerRow = sheet.createRow(0);
				String[]columns= 
					{
							"Semaine",
							"Mois",
							"Année",
							"Agefloc",
							"Chaux",
							"Chlore",
							"Gasoil",
							"KWH",
							"Sel",
							"Sulfate",
							"Usine"
							};
		        int i=0;
		        
		        for(String s:columns) {
		        	Cell cell = headerRow.createCell(i);
		            cell.setCellValue(s);
		            cell.setCellStyle(headerCellStyle);
		            i++;
		        }
		        
				for(Map<String, Object> map:listJSON) {
				  Factory usine=factoryRepository.findBykeyentity(map.get("Usine").toString());
					if (usine.getIdparent().equals(factory)) {
						Row row = sheet.createRow(rowNum++);

			            row.createCell(0)
			                    .setCellValue(map.get("week").toString());

			            row.createCell(1)
			                    .setCellValue(map.get("month").toString());
			            
			            row.createCell(2)
	                    .setCellValue(map.get("year").toString());

			            row.createCell(3)
	                    .setCellValue(map.get("aflc").toString());
			            
			            row.createCell(4)
	                    .setCellValue(map.get("chaux").toString());
			            
			            row.createCell(5)
	                    .setCellValue(map.get("Chlore").toString());
			            
			            row.createCell(6)
	                    .setCellValue(map.get("Gasoil").toString());
			            
			            row.createCell(7)
	                    .setCellValue(map.get("Kwh").toString());
			            
			            row.createCell(8)
	                    .setCellValue(map.get("Sel").toString());
			            
			            row.createCell(9)
	                    .setCellValue(map.get("Sulfate").toString());
			            
			            row.createCell(10)
	                    .setCellValue(map.get("FactoryName").toString());
					}else {
						Factory factoryInternal=factoryRepository.findById(usine.getIdparent().getId()).get();
						if (factoryInternal.getIdparent().equals(factory)) {
							Row row = sheet.createRow(rowNum++);

				            row.createCell(0)
				                    .setCellValue(map.get("week").toString());

				            row.createCell(1)
				                    .setCellValue(map.get("month").toString());
				            
				            row.createCell(2)
		                    .setCellValue(map.get("year").toString());

				            row.createCell(3)
		                    .setCellValue(map.get("aflc").toString());
				            
				            row.createCell(4)
		                    .setCellValue(map.get("chaux").toString());
				            
				            row.createCell(5)
		                    .setCellValue(map.get("Chlore").toString());
				            
				            row.createCell(6)
		                    .setCellValue(map.get("Gasoil").toString());
				            
				            row.createCell(7)
		                    .setCellValue(map.get("Kwh").toString());
				            
				            row.createCell(8)
		                    .setCellValue(map.get("Sel").toString());
				            
				            row.createCell(9)
		                    .setCellValue(map.get("Sulfate").toString());
				            
				            row.createCell(10)
		                    .setCellValue(map.get("FactoryName").toString());
						}
					}
				}
				rowNum=1;
			}
			FileOutputStream fileOut=null;
		
				String str=this.getClass().getClassLoader().getResource("").getPath();
				String filename="data"+System.currentTimeMillis() % 1000+".xlsx";
				 fullpath=str+filename;
				fileOut = new FileOutputStream(fullpath);
			
				workbook.write(fileOut);
				workbook.close();
				fileOut.close();
				
			
		
		return fullpath;
	}
	
	public Boolean readXlsForm(String path) {
		try {
			
		}catch (Exception e) {
			// TODO: handle exception
			return false;
		}
		return true;
	}
}
