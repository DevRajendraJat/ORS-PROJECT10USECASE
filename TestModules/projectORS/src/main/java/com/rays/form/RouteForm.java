package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.RouteDTO;

import com.rays.validation.ValidDate;

public class RouteForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Name contains alphabets only")
	@NotEmpty(message = "Name is required")
	private String name;

	@NotNull(message = "Please enter start date")
	@ValidDate(message = "Invalid date format or value")
	private String startDate;

	
	@Pattern(regexp = "^(?:0|[1-9][0-9]?|1[01][0-9]|250)$", message = "Please enter a number between 0 and 250")
	@NotEmpty(message = "AllowSpeed is required")
	private String allowSpeed;

	
	@Pattern(regexp = "^[a-zA-Z0-9_-]{1,20}$", message = " Vehicle ID must be alphanumeric with optional '-' or '_' and length between 1 to 20 characters")
	@NotEmpty(message = "Vehicle ID is required")
	private String vehicleId;

	@Override
	public BaseDTO getDto() {
		RouteDTO dto = initDTO(new RouteDTO());
		dto.setName(name);

		if (startDate != null && !startDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(startDate);
				dto.setStartDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}

		
		if (allowSpeed != null && !allowSpeed.isEmpty()) {
			dto.setAllowSpeed(Long.valueOf(allowSpeed));
		}
		dto.setVehicleId(vehicleId);

		return dto;
	}

	public String getAllowSpeed() {
		return allowSpeed;
	}

	public void setAllowSpeed(String allowSpeed) {
		this.allowSpeed = allowSpeed;
	}

	public String getVehicleId() {
		return vehicleId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public void setVehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}
}
