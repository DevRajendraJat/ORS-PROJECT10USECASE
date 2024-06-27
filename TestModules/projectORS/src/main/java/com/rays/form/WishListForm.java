package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.WishListDTO;
import com.rays.validation.ValidDate;

public class WishListForm extends BaseForm {

	@Pattern(regexp = "^[A-Z][a-zA-Z.]*([ '-][A-Z][a-zA-Z.]*)*$", message = "Product contains alphabets only")
	@NotEmpty(message = " Product is Required")
	private String product;

	@NotNull(message = "Please Enter Date")
	@ValidDate(message = "Invalid date format or value")
	private String date;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Username should contain alphabets only and follow [abc xyz] format")
	@NotEmpty(message = "Username is required")
	private String userName;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Remark contains alphabets only")
	@NotEmpty(message = "Remark is Required")
	private String remark;

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
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
	public BaseDTO getDto() {
		WishListDTO dto = initDTO(new WishListDTO());
		dto.setProduct(product);
		dto.setUserName(userName);

		if (date != null && !date.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(date);
				dto.setDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}

		dto.setRemark(remark);
		return dto;

	}

}
