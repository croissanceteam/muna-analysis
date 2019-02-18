package com.datavisualzer.regideso.models;

import java.io.Serializable;

public class ProductDataParser implements Serializable {

	public ProductDataParser(String week) {
		super();
		this.week = week;
	}

	private String week;

	public String getWeek() {
		return week;
	}

	public void setWeek(String week) {
		this.week = week;
	}

}
