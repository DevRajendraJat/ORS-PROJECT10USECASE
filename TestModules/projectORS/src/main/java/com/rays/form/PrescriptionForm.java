package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.PrescriptionDTO;
import com.rays.validation.ValidAlphabetic;
import com.rays.validation.ValidDate;

public class PrescriptionForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Name contains alphabets only")
	@NotEmpty(message = "name is required")
	// @ValidAlphabetic(message = "Please type alphabets")
	private String name;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "decease contains alphabets only")
	@NotEmpty(message = "decease is required")
	private String decease;

	@NotNull(message = "Please enter date")
	@ValidDate(message = "Invalid date format or value")
//	@Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Invalid date format, Please use a valid date")
	private String date;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Capacity contains alphabets only")
	@NotEmpty(message = "name is required")
	private String capacity;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDecease() {
		return decease;
	}

	public void setDecease(String decease) {
		this.decease = decease;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	@Override
	public BaseDTO getDto() {
		PrescriptionDTO dto = initDTO(new PrescriptionDTO());
		dto.setName(name);
		dto.setDecease(decease);
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
		dto.setCapacity(capacity);
		return dto;
	}
}
