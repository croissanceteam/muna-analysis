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
@Table(name="t_permission_access")
public class PermissionUsers implements Serializable{

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
	public int getIdpermission() {
		return idpermission;
	}
	public void setIdpermission(int idpermission) {
		this.idpermission = idpermission;
	}
	public int getIduser() {
		return iduser;
	}
	public void setIduser(int iduser) {
		this.iduser = iduser;
	}
	public int getIdorgunit() {
		return idorgunit;
	}
	public void setIdorgunit(int idorgunit) {
		this.idorgunit = idorgunit;
	}
	public Date getDatepermission() {
		return datepermission;
	}
	public void setDatepermission(Date datepermission) {
		this.datepermission = datepermission;
	}
	
	@Column(name="idpermission")
	private int idpermission;
	
	@Column(name="iduser")
	private int iduser;
	
	@Column(name="idorgunit")
	private int idorgunit;
	
	@Column(name="datepermission")
	private Date datepermission;
}
