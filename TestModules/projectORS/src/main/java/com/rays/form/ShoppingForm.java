package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.ShopingCartDTO;
import com.rays.validation.ValidDate;

public class ShoppingForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Name contains alphabets only")
	@NotEmpty(message = "Name is required")
	private String name;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Product name contains alphabets only")
	@NotEmpty(message = "Product is required")
	private String product;

	@NotNull(message = "Please Enter Date")
	@ValidDate(message = "Invalid date format or value")
	private String date;

	@NotEmpty(message = "Quantity is Required")
	@Pattern(regexp = "^[0-9]{1,6}$", message = "Quantity must be number coantain only")
	private String quantity;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

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

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	@Override
	public BaseDTO getDto() {

		ShopingCartDTO dto = initDTO(new ShopingCartDTO());
		dto.setName(name);
		dto.setProduct(product);
		if (quantity != null && !quantity.isEmpty()) {
			dto.setQuantity(Long.valueOf(quantity));
		}
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

		return dto;

	}

}
