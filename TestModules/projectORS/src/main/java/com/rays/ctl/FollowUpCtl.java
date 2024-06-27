package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.FollowUpDTO;

import com.rays.form.FollowUpForm;
import com.rays.service.FollowUpServiceInt;

@RestController
@RequestMapping(value = "FollowUp")
public class FollowUpCtl extends BaseCtl<FollowUpForm, FollowUpDTO, FollowUpServiceInt> {
	
	@Autowired
	FollowUpServiceInt followUpServiceInt;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Raj");
		ORSResponse res = new ORSResponse(true);
		FollowUpDTO dto = new FollowUpDTO();
		List<DropdownList> list = followUpServiceInt.search(dto, userContext);
		res.addResult("Flist", list);
		return res;
	}
}