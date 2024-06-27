package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.SupplierDTO;

import com.rays.form.SupplierForm;
import com.rays.service.SupplierServiceInt;

@RestController
@RequestMapping(value = "Supplier")
public class SupplierCtl extends BaseCtl<SupplierForm, SupplierDTO, SupplierServiceInt> {
	
	@Autowired
	SupplierServiceInt supplierServiceInt;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Supplier");
		ORSResponse res = new ORSResponse(true);
		SupplierDTO dto = new SupplierDTO();
		List<DropdownList> list = supplierServiceInt.search(dto, userContext);
		res.addResult("Slist", list);
		return res;
	}
}
