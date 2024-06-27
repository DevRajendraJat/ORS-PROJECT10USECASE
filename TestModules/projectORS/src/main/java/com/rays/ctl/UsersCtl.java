package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.PrescriptionDTO;
import com.rays.dto.UsersDTO;
import com.rays.form.UsersForm;
import com.rays.service.UsersServiceint;

@RestController
@RequestMapping(value = "Users")
public class UsersCtl extends BaseCtl<UsersForm, UsersDTO, UsersServiceint> {

	@Autowired
	UsersServiceint Userserviceint;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Dipanshu");
		ORSResponse res = new ORSResponse(true);
		UsersDTO dto = new UsersDTO();
		List<DropdownList> list = Userserviceint.search(dto, userContext);
		res.addResult("Ulist", list);
		return res;
	}
}
