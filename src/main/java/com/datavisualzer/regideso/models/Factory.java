package com.datavisualzer.regideso.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.type.descriptor.java.PrimitiveByteArrayTypeDescriptor;
@Entity
@Table(name="t_entity_orgunits")
public class Factory implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

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
	public String getKeyentity() {
		return keyentity;
	}
	public void setKeyentity(String keyentity) {
		this.keyentity = keyentity;
	}
	public String getLabelentity() {
		return labelentity;
	}
	public void setLabelentity(String labelentity) {
		this.labelentity = labelentity;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Factory getIdparent() {
		return idparent;
	}
	public void setIdparent(Factory idparent) {
		this.idparent = idparent;
	}

	@Column(name="keyentity")
	private String keyentity;
	
	@Column(name="labelentity")
	private String labelentity;
	
	@Column(name="category")
	private String category; 
	
	@ManyToOne
	@JoinColumn(name="idparent")
	private Factory idparent;
	@Column(name="embedcard")
	private String embedcard;
	public String getEmbedcard() {
		return embedcard;
	}
	public void setEmbedcard(String embedcard) {
		this.embedcard = embedcard;
	}
	
	@Column(name="lat")
	private String lat;
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	
	@Column(name="lng")
	private String lng;
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	
}
