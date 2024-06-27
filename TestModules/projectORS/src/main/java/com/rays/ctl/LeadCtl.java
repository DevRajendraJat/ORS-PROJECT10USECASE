package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.LeadDTO;
import com.rays.form.LeadForm;
import com.rays.service.LeadServiceInt;

@RestController
@RequestMapping(value = "Lead")
public class LeadCtl extends BaseCtl<LeadForm, LeadDTO, LeadServiceInt> {

	@Autowired
	private LeadServiceInt leadService;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Rahul");
		ORSResponse res = new ORSResponse(true);
		LeadDTO dto = new LeadDTO();
		List<DropdownList> list = leadService.search(dto, userContext);
		res.addResult("Llist", list);
		return res;
	}
}
