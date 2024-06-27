package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.ClientDTO;

public class ClientForm extends BaseForm {

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Name contains alphabets only")
	@NotEmpty(message = "Name is required")
	private String name;

	@Pattern(regexp = "^[A-Z][a-zA-Z.]*([ '-][A-Z][a-zA-Z.]*)*$", message = "Address contains alphabets only")
	@NotEmpty(message = "Product is required")

	@Pattern(regexp = "^[A-Za-z0-9 .,'/-]+$", message = "Address should contain alphanumeric characters, spaces, '.', ',', '-', '/' only")
	@NotEmpty(message = "Address is required")
	private String address;

	@Pattern(regexp = "^[0-9]{10}$", message = "Invalid mobile number")
	@NotEmpty(message = "Phone is required")
	private String phone;

	@Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Priority contains alphabets only")
	@NotEmpty(message = "priority is required")
	private String priority;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	@Override
	public BaseDTO getDto() {
		ClientDTO dto = initDTO(new ClientDTO());

		dto.setName(name);
		dto.setAddress(address);

		if (phone != null && !phone.isEmpty()) {
			dto.setPhone(Long.valueOf(phone));
		}
		dto.setPriority(priority);

		return dto;
	}
}
