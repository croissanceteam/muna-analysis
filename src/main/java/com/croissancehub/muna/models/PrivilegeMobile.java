package com.croissancehub.muna.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.aspectj.weaver.tools.cache.AsynchronousFileCacheBacking.RemoveCommand;
import org.hibernate.sql.Delete;

@Entity
@Table(name="t_functionnalities")
public class PrivilegeMobile implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public Users getIduser() {
		return iduser;
	}
	public void setIduser(Users iduser) {
		this.iduser = iduser;
	}
	
	@ManyToOne
	@JoinColumn(name="idfunc")
	private MobileFunc idfunc;
	
	@Column(name="create")
	private Boolean create;
	
	@Column(name="read")
	private Boolean read;
	
	@Column(name="delete")
	private Boolean delete;
	
	@Column(name="status")
	private Boolean status;
	
	public MobileFunc getIdfunc() {
		return idfunc;
	}
	public void setIdfunc(MobileFunc idfunc) {
		this.idfunc = idfunc;
	}
	public Boolean getCreate() {
		return create;
	}
	public void setCreate(Boolean create) {
		this.create = create;
	}
	public Boolean getRead() {
		return read;
	}
	public void setRead(Boolean read) {
		this.read = read;
	}
	public Boolean getDelete() {
		return delete;
	}
	public void setDelete(Boolean delete) {
		this.delete = delete;
	}

	@ManyToOne
	@JoinColumn(name="iduser")
	private Users iduser;
}
