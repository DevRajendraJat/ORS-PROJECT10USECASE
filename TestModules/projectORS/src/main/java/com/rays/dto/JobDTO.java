package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_job")
public class JobDTO extends BaseDTO {

	@Column(name = "TITLE")
	public String title;

	@Column(name = "DATEOFOPENING")
	public Date dateofOpening;

	@Column(name = "EXPERIENCE")
	public String experience;

	@Column(name = "STATUS")
	public String status;

	@Override
	public String getValue() {
		return status;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getDateofOpening() {
		return dateofOpening;
	}

	public void setDateofOpening(Date dateofOpening) {
		this.dateofOpening = dateofOpening;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "title";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return title;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "title";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("title", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("title", title);
		return map;
	}

}
