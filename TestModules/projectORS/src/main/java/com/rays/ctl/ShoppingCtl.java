package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.ShopingCartDTO;
import com.rays.form.ShoppingForm;
import com.rays.service.ShoppingServiceInt;

@RestController
@RequestMapping(value = "Shopping")
public class ShoppingCtl extends BaseCtl<ShoppingForm, ShopingCartDTO, ShoppingServiceInt> {

	@Autowired
	ShoppingServiceInt shoppingService = null;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Rahul");
		ORSResponse res = new ORSResponse(true);
		ShopingCartDTO dto = new ShopingCartDTO();
		List<DropdownList> list = shoppingService.search(dto, userContext);
		res.addResult("Slist", list);
		return res;
	}

}
