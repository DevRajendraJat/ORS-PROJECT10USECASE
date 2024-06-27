package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.EmployeeDTO;
import com.rays.dto.OrderDTO;
import com.rays.form.EmployeeForm;
import com.rays.service.EmployeeServiceint;
import com.rays.service.OrderServiceInt;

@RestController
@RequestMapping(value = "Employee")
public class EmployeeCtl extends BaseCtl<EmployeeForm, EmployeeDTO, EmployeeServiceint> {

	@Autowired
	EmployeeServiceint employeeService = null;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Rahul");
		ORSResponse res = new ORSResponse(true);
		EmployeeDTO dto = new EmployeeDTO();
		List<DropdownList> list = employeeService.search(dto, userContext);
		res.addResult("empList", list);
		return res;
	}
}



