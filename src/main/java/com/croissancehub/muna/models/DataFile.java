package com.croissancehub.muna.models;

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

@Entity
@Table(name="t_datafiles")
public class DataFile implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="datafileid")
	private Integer id;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getTypefileid() {
		return typefileid;
	}
	public void setTypefileid(int typefileid) {
		this.typefileid = typefileid;
	}
	public Factory getOrgunitid() {
		return orgunitid;
	}
	
	public void setOrgunitid(Factory orgunit) {
		this.orgunitid = orgunit;
	}
	public Indicators getIndicatorid() {
		return this.indicatorid;
	}
	public void setIndicatorid(Indicators indicatorid) {
		this.indicatorid = indicatorid;
	}
	public String getIndicatorvalue() {
		return indicatorvalue;
	}
	public void setIndicatorvalue(String indicatorvalue) {
		this.indicatorvalue = indicatorvalue;
	}
	public Date getDatesubmissions() {
		return datesubmissions;
	}
	public void setDatesubmissions(Date datesubmissions) {
		this.datesubmissions = datesubmissions;
	}
	public Date getDatestorage() {
		return datestorage;
	}
	public void setDatestorage(Date datestorage) {
		this.datestorage = datestorage;
	}
	@Column(name="month")
	private String month;
	
	@Column(name="year")
	private int year;
	
	@Column(name="typefileid")
	private int typefileid;
	@ManyToOne
	@JoinColumn(name="orgunitid")
	private Factory orgunitid;
	
	@ManyToOne
	@JoinColumn(name="indicatorid")
	private Indicators indicatorid;
	
	@Column(name="indicatorvalue")
	private String indicatorvalue;
	
	@Column(name="datesubmissions")
	private Date datesubmissions;
	
	@Column(name="datestorage")
	private Date datestorage;
	
	@ManyToOne
	@JoinColumn(name="idexportation")
	private DataExportation dataExportation;
	
}
