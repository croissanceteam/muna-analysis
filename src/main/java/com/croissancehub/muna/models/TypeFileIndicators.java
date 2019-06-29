package com.croissancehub.muna.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="t_typefile_indicators")
public class TypeFileIndicators {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Indicators getIdindicator() {
		return idindicator;
	}
	public void setIdindicator(Indicators idindicator) {
		this.idindicator = idindicator;
	}
	public TypeFile getIdtypefile() {
		return idtypefile;
	}
	public void setIdtypefile(TypeFile idtypefile) {
		this.idtypefile = idtypefile;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}
	@ManyToOne
	@JoinColumn(name="indicatorid")
	private Indicators idindicator;
	
	@ManyToOne
	@JoinColumn(name="idtypefile")
	private TypeFile idtypefile;
	
	@Column(name="datecreated")
	private Date datecreated;
	public TypeFileIndicators(Indicators idindicator, TypeFile idtypefile, Date datecreated) {
		super();
		this.idindicator = idindicator;
		this.idtypefile = idtypefile;
		this.datecreated = datecreated;
	}
	public TypeFileIndicators() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
