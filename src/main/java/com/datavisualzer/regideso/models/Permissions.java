package com.datavisualzer.regideso.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="t_permissions")
public class Permissions implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getRead() {
		return read;
	}
	public void setRead(int read) {
		this.read = read;
	}
	public int getWrite() {
		return write;
	}
	public void setWrite(int write) {
		this.write = write;
	}
    public int getDelete() {
        return delete;
	}
	
    public void setDelete(int delete) {
        this.delete = delete;
    }
	@Column(name="role")
	private String role;
	
	@Column(name="read")
	private int read;
	
	@Column(name="write")
	private int write;

	@Column(name="delete")
	private int delete;
	

}
