package com.croissancehub.muna.models;

public class orgunits {
	public orgunits(int id, String orgunitname, String parentname,String embedcard,String lat,String lng) {
		super();
		this.id = id;
		this.orgunitname = orgunitname;
		this.parentname = parentname;
		this.lat=lat;
		this.lng=lng;
		this.embedcard=embedcard;
	}
	private String embedcard;
	public String getEmbedcard() {
		return embedcard;
	}
	public void setEmbedcard(String embedcard) {
		this.embedcard = embedcard;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	private String lat;
	private String lng;
	public orgunits() {}
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOrgunitname() {
		return orgunitname;
	}
	public void setOrgunitname(String orgunitname) {
		this.orgunitname = orgunitname;
	}
	public String getParentname() {
		return parentname;
	}
	public void setParentname(String parentname) {
		this.parentname = parentname;
	}
	private String orgunitname;
	private String parentname;
}
