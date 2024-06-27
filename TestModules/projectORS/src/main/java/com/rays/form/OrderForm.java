package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.OrderDTO;
import com.rays.validation.ValidDate;

public class OrderForm extends BaseForm {

	@NotEmpty(message = "Quantity is Required")
	@Pattern(regexp = "^[0-9]{1,6}$", message = "Quantity must be number coantain only")
	private String quantity;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Product name contains alphabets only")
	@NotEmpty(message = "Product is required")
	private String product;

	@NotNull(message = "Please Enter Date")
	@ValidDate(message = "Invalid date format or value")
	private String date;

	@NotEmpty(message = "Amount is required")
	@Pattern(regexp = "^[0-9]{1,6}$", message = "Amount must be number coantain only")
	private String amount;

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
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

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	@Override
	public BaseDTO getDto() {
		OrderDTO dto = initDTO(new OrderDTO());

		dto.setProduct(product);

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
		if (amount != null && !amount.isEmpty()) {
			dto.setAmount(Long.valueOf(amount));
		}
		if (quantity != null && !quantity.isEmpty()) {
			dto.setQuantity(Long.valueOf(quantity));
		}

		return dto;
	}

}
