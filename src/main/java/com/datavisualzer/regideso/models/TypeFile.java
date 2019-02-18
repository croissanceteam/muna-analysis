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

@Entity
@Table(name="t_typefile")
public class TypeFile implements Serializable{

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
	public String getKeycode() {
		return keycode;
	}
	public void setKeycode(String keycode) {
		this.keycode = keycode;
	}
	public String getTypefilename() {
		return typefilename;
	}
	public void setTypefilename(String typefilename) {
		this.typefilename = typefilename;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getDatevalidity() {
		return datevalidity;
	}
	public void setDatevalidity(Date datevalidity) {
		this.datevalidity = datevalidity;
	}
	public TypeFile getParent() {
		return this.parent;
	}
	public void setParent(TypeFile p) {
		this.parent=p;
	}
	@Column(name="keycode")
	private String keycode;
	
	@Column(name="typefilename")
	private String typefilename;

	@Column(name="datecreated")
	private Date datecreated;
	
	@Column(name="status")
	private String status;
	
	@Column(name="datevalidity")
	private Date datevalidity;
	@ManyToOne
	@JoinColumn(name="parent")
	private TypeFile parent;
}
