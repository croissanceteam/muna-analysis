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
@Table(name="t_permission_access")
public class PermissionTypeFileOrgunitUser implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Permissions getIdPermission() {
		return idPermission;
	}

	public void setIdPermission(Permissions idPermission) {
		this.idPermission = idPermission;
	}

	public Users getIdUsers() {
		return idUsers;
	}

	public void setIdUsers(Users idUsers) {
		this.idUsers = idUsers;
	}

	public Factory getIdFactory() {
		return idFactory;
	}

	public void setIdFactory(Factory idFactory) {
		this.idFactory = idFactory;
	}

	public Date getDatePermision() {
		return datePermision;
	}

	public void setDatePermision(Date datePermision) {
		this.datePermision = datePermision;
	}

	@ManyToOne
	@JoinColumn(name="idpermission")
	private Permissions idPermission;
	
	@ManyToOne
	@JoinColumn(name="iduser")
	private Users idUsers;
	
	@ManyToOne
	@JoinColumn(name="idorgunit")
	private Factory idFactory;
	
	@Column(name="datepermission")
	private Date datePermision;
}
