package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.FollowUpDTO;

import com.rays.validation.ValidDate;

public class FollowUpForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Patient Name contains alphabets only")
	@NotEmpty(message = "Patient Name is required")
	private String patient;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Doctor Name contain alphabate only")
	@NotEmpty(message = "Doctor Name is required")
	private String doctor;

	@NotNull(message = "Please enter visit date")
	@ValidDate(message = "Invalid date format or value")
	private String visitDate;

	@NotEmpty(message = "Fees is required")
	@Pattern(regexp = "^[0-9]{1,6}$", message = "Fees must be required")
	private String fees;


	@Override
	public BaseDTO getDto() {
		FollowUpDTO dto = initDTO(new FollowUpDTO());
		dto.setPatient(patient);
		dto.setDoctor(doctor);
		if (visitDate != null && !visitDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(visitDate);
				dto.setVisitDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}
		if (fees != null && !fees.isEmpty()) {
			dto.setFees(Long.valueOf(fees));
		}
		return dto;

	}

	public String getPatient() {
		return patient;
	}

	public void setPatient(String patient) {
		this.patient = patient;
	}

	public String getDoctor() {
		return doctor;
	}

	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}

	public String getVisitDate() {
		return visitDate;
	}

	public void setVisitDate(String visitDate) {
		this.visitDate = visitDate;
	}

	public String getFees() {
		return fees;
	}

	public void setFees(String fees) {
		this.fees = fees;
	}
}
