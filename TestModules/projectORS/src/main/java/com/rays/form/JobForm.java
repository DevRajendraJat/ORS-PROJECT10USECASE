package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.JobDTO;
import com.rays.validation.ValidDate;

public class JobForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "title contains alphabets only")
	@NotEmpty(message = "title is required")
	private String title;

	@NotNull(message = "Please Enter dateofOpening")
	@ValidDate(message = "Invalid date format or value")
	private String dateofOpening;

	// @Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "experience
	// contains alphabets only")
	@NotEmpty(message = "Experience is required")
	public String experience;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "status contains alphabets only")
	@NotEmpty(message = "status is required")
	public String status;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDateofOpening() {
		return dateofOpening;
	}

	public void setDateofOpening(String dateofOpening) {
		this.dateofOpening = dateofOpening;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public BaseDTO getDto() {
		JobDTO dto = initDTO(new JobDTO());
		dto.setTitle(title);
		dto.setExperience(experience);
		if (dateofOpening != null && !dateofOpening.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(dateofOpening);
				dto.setDateofOpening(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}

		dto.setStatus(status);
		return dto;
	}
}
