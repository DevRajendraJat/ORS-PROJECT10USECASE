package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_transportation")
public class TransportationDTO extends BaseDTO {

	@Column(name = "DESCRIPTION",length = 50)
	private String Description;

	@Column(name = "MODE",length = 50)
	private String mode;

	@Column(name = "DATE")
	private Date date;

	@Column(name = "COST")
	private double cost;

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Override
	public String getValue() {
		return mode; // Assuming mode is the value you want to return
	}

	@Override
	public String getUniqueKey() {
		return "Description"; // Adjust as per your unique key requirement
	}

	@Override
	public String getUniqueValue() {
		return Description; // Adjust as per your unique value requirement
	}

	@Override
	public String getLabel() {
		return "Description"; // Adjust as per your label requirement
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<>();
		map.put("mode", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<>();
		map.put("mode", mode);
		return map;
	}

	// Additional methods or overrides can be added as per your application's
	// requirements

}
