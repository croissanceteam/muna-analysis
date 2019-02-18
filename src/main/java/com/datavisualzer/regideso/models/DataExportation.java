package com.datavisualzer.regideso.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.apache.naming.java.javaURLContextFactory;

@Entity
@Table(name="t_exportation_datas") 
public class DataExportation implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public DataExportation() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DataExportation(int id, Date dateexportation, String content, Users userid, Boolean cronjob,Factory orgunit,double datasize,int month,int year) {
		super();
		this.id = id;
		this.dateexportation = dateexportation;
		this.content = content;
		this.userid = userid;
		this.cronjob = cronjob;
		this.orgunitid=orgunit;
		this.datasize=datasize;
		this.monthcollect=month;
		this.year=year;
		
	}

	public Date getDateexportation() {
		return dateexportation;
	}

	public void setDateexportation(Date dateexportation) {
		this.dateexportation = dateexportation;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Users getUserid() {
		return userid;
	}

	public void setUserid(Users userid) {
		this.userid = userid;
	}

	public Boolean getCronjob() {
		return cronjob;
	}

	public void setCronjob(Boolean cronjob) {
		this.cronjob = cronjob;
	}

	@Column(name="dateexportation")
	private Date dateexportation;
	
	@Column(name="content")
	private String content;
	
	@ManyToOne
	@JoinColumn(name="userid")
	private Users userid;
	
	@Column(name="cronjob")
	private Boolean cronjob;
	
	@ManyToOne
	@JoinColumn(name="idorgunit")
	private Factory orgunitid; 

	public Factory getOrgunitid() {

		return orgunitid;
	}

	public void setOrgunitid(Factory orgunitid) {
		this.orgunitid = orgunitid;
	}
	@Column(name="datasize")
	private double datasize;

	public double getDatasize() {
		return datasize;
	}

	public void setDatasize(double datasize) {
		this.datasize = datasize;
	}
	@Column(name="monthcollect")
	private int monthcollect;

	public int getMonthcollect() {
		return monthcollect;
	}

	public void setMonthcollect(int monthcollect) {
		this.monthcollect = monthcollect;
	}
	
	@Column(name="year")
	private int year;

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}
	
}
