package com.rays.dto;

import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_client")
public class ClientDTO extends BaseDTO {

	@Column(name = "NAME", length = 50)
	private String Name;

	@Column(name = "ADDRESS", length = 50)
	private String address;

	@Column(name = "PHONE", length = 50)
	private Long phone;

	@Column(name = "PRIORITY", length = 20)
	private String priority = null;

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("priority", "asc");

		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("priority", priority);
		return map;
	}

	@Override
	public String getUniqueKey() {
		return "phone";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return phone + "";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "phone";
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return priority;
	}

}