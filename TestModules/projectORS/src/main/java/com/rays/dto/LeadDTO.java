package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_lead")
public class LeadDTO extends BaseDTO {

	@Column(name = "DATE", length = 50)
	private Date date;

	@Column(name = "CONTAC_NAME", length = 50)
	private String contacName;

	@Column(name = "MOBILE", length = 50)
	private Long mobile;

	@Column(name = "STATUS", length = 50)
	private String status;

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getContacName() {
		return contacName;
	}

	public void setContacName(String contacName) {
		this.contacName = contacName;
	}

	public Long getMobile() {
		return mobile;
	}

	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return status;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "contacName";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return contacName + "";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return status;
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("contacName", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("contacName", contacName);
		return map;
	}
}
