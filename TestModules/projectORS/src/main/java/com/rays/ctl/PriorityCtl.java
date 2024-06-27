package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.PriorityDTO;
import com.rays.dto.RoleDTO;
import com.rays.form.PriorityForm;
import com.rays.form.RoleForm;
import com.rays.service.PriorityServiceInt;
import com.rays.service.RoleServiceInt;

@RestController
@RequestMapping(value = "Priority")
public class PriorityCtl extends BaseCtl<PriorityForm, PriorityDTO, PriorityServiceInt> {

	@Autowired
	private PriorityServiceInt priorityService;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload");
		ORSResponse res = new ORSResponse(true);
		PriorityDTO dto = new PriorityDTO();

		List<DropdownList> list = priorityService.search(dto, userContext);
		res.addResult("priorityList", list);
		return res;
	}
}
