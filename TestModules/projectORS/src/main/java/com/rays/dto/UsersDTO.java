package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_users")
public class UsersDTO extends BaseDTO{

	@Column(name = "NAME", length = 50)
	private String name;


	@Column(name = "LOGIN_ID", length = 50)
	private String loginId;

	@Column(name = "PASSWORD", length = 50)
	private String password;

	@Column(name = "DateOfBirth", length = 50)
	private Date dateOfBirth;

	
	@Column(name = "Mobile", length = 50)
	private long mobile;


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getLoginId() {
		return loginId;
	}


	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Date getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}


	public long getMobile() {
		return mobile;
	}


	public void setMobile(long mobile) {
		this.mobile = mobile;
	}


	@Override
	public String getValue() {
		return password;
	}

	@Override
	public String getUniqueKey() {
		return "name";
	}

	@Override
	public String getUniqueValue() {
		return name;
	}

	@Override
	public String getLabel() {
		return "Name";
	}



	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<>();
		map.put("name", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<>();
		map.put("name", name);
		return map;
	}


	
}
