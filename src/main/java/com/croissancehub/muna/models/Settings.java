package com.croissancehub.muna.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.croissancehub.muna.repositories.SettingCategory;

@Entity
@Table(name="t_settings")
public class Settings {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	public Settings
	(String icon,
	 String name,
	 String description, 
	 String iconstatus, 
	 String state,
	 Date datecreated,
	 String url,
	 SettingCategory settingCategory) {
		super();
		this.icon = icon;
		this.name = name;
		this.description = description;
		this.iconstatus = iconstatus;
		this.state = state;
		this.datecreated = datecreated;
		this.url = url;
		this.settingCategory=settingCategory;
	}
	
	public Settings() {
		
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getIconstatus() {
		return iconstatus;
	}
	public void setIconstatus(String iconstatus) {
		this.iconstatus = iconstatus;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	@Column(name="icon")
	private String icon;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="iconstatus")
	private String iconstatus;
	
	@Column(name="state")
	private String state;
	
	@Column(name="datecreated")
	private Date datecreated;
	
	@Column(name="url")
	private String url;
	
	@JoinColumn(name="category")
	@ManyToOne
	private SettingCategory settingCategory;

	public SettingCategory getSettingCategory() {
		return settingCategory;
	}

	public void setSettingCategory(SettingCategory settingCategory) {
		this.settingCategory = settingCategory;
	}

}
