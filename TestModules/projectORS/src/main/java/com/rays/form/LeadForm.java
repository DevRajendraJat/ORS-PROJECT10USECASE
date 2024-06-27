package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.LeadDTO;
import com.rays.validation.ValidDate;

public class LeadForm extends BaseForm {

	@NotNull(message = "Please Enter Date")
	@ValidDate(message = "Invalid date format or value")
	private String date;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "ContacName contains alphabets only")
	@NotEmpty(message = "contacName is required")
	private String contacName;

	@NotEmpty(message = "mobile is Required")
	@Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile No is Invalid")
	private String mobile = null;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "status contains alphabets only")
	@NotEmpty(message = "status is required")
	private String status;

	

	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public String getContacName() {
		return contacName;
	}



	public void setContacName(String contacName) {
		this.contacName = contacName;
	}



	public String getMobile() {
		return mobile;
	}



	public void setMobile(String mobile) {
		this.mobile = mobile;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	@Override
	public BaseDTO getDto() {
		LeadDTO dto = initDTO(new LeadDTO());
		dto.setContacName(contacName);
		dto.setStatus(status);
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
		if (mobile != null && !mobile.isEmpty()) {
			dto.setMobile(Long.valueOf(mobile));
		}
		return dto;
	}

}
