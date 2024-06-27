package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_wishlist")
public class WishListDTO extends BaseDTO {

	@Column(name = "Product")
	private String product;

	@Column(name = "Date")
	private Date date;

	@Column(name = "UserName")
	private String userName;

	@Column(name = "Remark")
	private String remark;

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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return product;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "userName";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return userName ;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "userName";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("product", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		// TODO Auto-generated method stub
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("product", product);
		return map;
	}

}
