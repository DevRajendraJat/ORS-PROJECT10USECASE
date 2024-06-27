package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;
@Entity
@Table(name = "st_supplier")
public class SupplierDTO extends BaseDTO {

	@Column(name = "NAME", length = 50)
	private String name;

	@Column(name = "CATEGORY", length = 50)
	private String category;

	@Column(name = "REGISTRATION_DATE", length = 50)
	private Date registrationDate;

	@Column(name = "PAYMENT_TERM", length = 50)
	private long paymentTerm;

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	public long getPaymentTerm() {
		return paymentTerm;
	}

	public void setPaymentTerm(long paymentTerm) {
		this.paymentTerm = paymentTerm;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "paymentTerm";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return paymentTerm + "";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "paymentTerm";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<>();
		map.put("category", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<>();
		map.put("category", category);
		return map;
	}

}
