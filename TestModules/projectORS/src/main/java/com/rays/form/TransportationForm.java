package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.TransportationDTO;
import com.rays.validation.ValidDate;

public class TransportationForm extends BaseForm {

	@Size(max = 50, message = "Description should not exceed 50 characters")
	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "description contains alphabets only")
	@NotEmpty(message = "description is required")
	private String description;

	
	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Mode contains alphabets only")
	@NotEmpty(message = "Mode is required")
	private String mode;

	@NotNull(message = "Please enter date")
	@ValidDate(message = "Invalid date format or value")
	private String date;

	@NotEmpty(message = "Cost is required")
	@Pattern(regexp = "^\\d*\\.?\\d*$", message = "Cost must be a number")
	private String cost;

	@Override
	public BaseDTO getDto() {
		TransportationDTO dto = initDTO(new TransportationDTO());
		dto.setMode(mode);
		dto.setDescription(description);
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

		if (cost != null && !cost.isEmpty()) {
			dto.setCost(Double.parseDouble(cost));
		}

		return dto;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}
}
