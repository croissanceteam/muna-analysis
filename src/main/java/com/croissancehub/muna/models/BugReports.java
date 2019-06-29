package com.croissancehub.muna.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="t_bugs")
public class BugReports {

	public BugReports(int id, String content, Date dateBug, String methodHttp, Users userid) {
		super();
		this.id = id;
		this.content = content;
		this.dateBug = dateBug;
		this.methodHttp = methodHttp;
		this.userid = userid;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getDateBug() {
		return dateBug;
	}

	public void setDateBug(Date dateBug) {
		this.dateBug = dateBug;
	}

	public String getMethodHttp() {
		return methodHttp;
	}

	public void setMethodHttp(String methodHttp) {
		this.methodHttp = methodHttp;
	}

	public Users getUserid() {
		return userid;
	}

	public void setUserid(Users userid) {
		this.userid = userid;
	}

	@Column(name="content")
	private String content;
	
	@Column(name="datebugs")
	private Date dateBug;
	
	@Column(name="methodhttp")
	private String methodHttp;
	
	@JoinColumn(name="userid")
	private Users userid;
}
