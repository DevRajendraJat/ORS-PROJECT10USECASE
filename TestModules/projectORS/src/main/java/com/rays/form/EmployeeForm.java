package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.EmployeeDTO;
import com.rays.validation.ValidDate;

public class EmployeeForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Name contains alphabets only")
	@NotEmpty(message = "Name is required")
	private String name;

	@NotNull(message = "Please Enter dateOfJoining")
	@ValidDate(message = "Invalid date format or value")
	private String dateOfJoining;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "department Name contains alphabets only")
	@NotEmpty(message = "department is required")
	private String department;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "lastEmployerName contains alphabets only")
	@NotEmpty(message = "lastEmployerName is required")
	private String lastEmployerName;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(String dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getLastEmployerName() {
		return lastEmployerName;
	}

	public void setLastEmployerName(String lastEmployerName) {
		this.lastEmployerName = lastEmployerName;
	}

	@Override
	public BaseDTO getDto() {
		EmployeeDTO dto = initDTO(new EmployeeDTO());
		if (dateOfJoining != null && !dateOfJoining.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(dateOfJoining);
				dto.setDateOfJoining(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}
		dto.setDepartment(department);
		dto.setLastEmployerName(lastEmployerName);
		dto.setName(name);
		return dto;
	}
}
