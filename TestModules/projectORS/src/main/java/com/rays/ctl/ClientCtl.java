package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.ClientDTO;
import com.rays.dto.EmployeeDTO;
import com.rays.form.ClientForm;
import com.rays.service.ClientServiceint;
import com.rays.service.EmployeeServiceint;

@RestController
@RequestMapping(value = "Client")
public class ClientCtl extends BaseCtl<ClientForm, ClientDTO, ClientServiceint> {
	@Autowired
	ClientServiceint  clientServiceint = null;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Raj");
		ORSResponse res = new ORSResponse(true);
		ClientDTO dto= new ClientDTO();
		List<DropdownList> list = clientServiceint.search(dto, userContext);
		res.addResult("Clist", list);
		return res;
	}
}

