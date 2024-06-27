package com.rays.form;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.PriorityDTO;

public class PriorityForm extends BaseForm {

	public static final int HIGH = 1;
	public static final int MEDIUM = 2;
	public static final int LOW = 3;

	@NotEmpty(message = "name is required")
	private String name = null;

	@NotEmpty(message = "name is required")
	private String description = null;

	@NotEmpty(message = "name is required")
	private String priorityName = null;

	public String getPriorityName() {
		return priorityName;
	}

	public void setPriorityName(String priorityName) {
		this.priorityName = priorityName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;

	}

	@Override
	public BaseDTO getDto() {

		PriorityDTO dto = initDTO(new PriorityDTO());
		dto.setName(name);
		dto.setDescription(description);
		dto.setPriorityName(priorityName);
		return dto;

	}

}
