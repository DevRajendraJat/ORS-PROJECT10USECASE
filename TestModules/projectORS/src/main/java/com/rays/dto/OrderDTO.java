package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_order")
public class OrderDTO extends BaseDTO {

	@Column(name = "QUANTITY", length = 50)
	private Long quantity;

	@Column(name = "PRODUCT", length = 50)
	private String product;

	@Column(name = "Date", length = 50)
	private Date date;

	@Column(name = "AMOUNT", length = 50)
	private Long amount;

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return product;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "amount";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return amount + "";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "amount";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("product", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("product", product);
		return map;
	}
}
