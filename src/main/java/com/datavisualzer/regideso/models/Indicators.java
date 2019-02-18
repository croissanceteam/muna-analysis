package com.datavisualzer.regideso.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_indicators")
public class Indicators implements Serializable{
	@Column(name="id")
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getKeycode() {
		return keycode;
	}
	public void setKeycode(String keycode) {
		this.keycode = keycode;
	}
	public String getIndicatorname() {
		return indicatorname;
	}
	public void setIndicatorname(String indicatorname) {
		this.indicatorname = indicatorname;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}
	public Date getDatebegin() {
		return datebegin;
	}
	public void setDatebegin(Date datebegin) {
		this.datebegin = datebegin;
	}
	public Date getDateend() {
		return dateend;
	}
	public void setDateend(Date dateend) {
		this.dateend = dateend;
	}
	@Column(name="keycode")
	private String keycode;
	
	@Column(name="indicatorname")
	private String indicatorname;
	
	@Column(name="datecreated")
	private Date datecreated;
	
	@Column(name="datebegin")
	private Date datebegin;
	
	@Column(name="dateend")
	private Date dateend;
}
