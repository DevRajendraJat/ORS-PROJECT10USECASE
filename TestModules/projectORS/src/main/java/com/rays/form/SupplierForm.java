package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.SupplierDTO;

import com.rays.validation.ValidDate;

public class SupplierForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Name contains alphabets only")
	@NotEmpty(message = "Name is required")
	private String name;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Catagory contains alphabets only")
	@NotEmpty(message = "Category is required")
	private String category;

	@NotNull(message = "Please enter registration date")
	@ValidDate(message = "Invalid date format or value")
	private String registrationDate;

	@NotEmpty(message = "paymentTerm is required")
	@Pattern(regexp = "^(?!0+$)[0-9]{1,6}$", message = "paymentTerm must be a number containing only digits and cannot be zero")
	private String paymentTerm;

	@Override
	public BaseDTO getDto() {
		SupplierDTO dto = initDTO(new SupplierDTO());
		dto.setName(name);
		dto.setCategory(category);

		if (registrationDate != null && !registrationDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(registrationDate);
				dto.setRegistrationDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}
		if (paymentTerm != null && !paymentTerm.isEmpty()) {
			dto.setPaymentTerm(Long.valueOf(paymentTerm));
		}
		return dto;

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

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getPaymentTerm() {
		return paymentTerm;
	}

	public void setPaymentTerm(String paymentTerm) {
		this.paymentTerm = paymentTerm;
	}
}
