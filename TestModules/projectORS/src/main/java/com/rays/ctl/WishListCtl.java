package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.WishListDTO;
import com.rays.form.WishListForm;
import com.rays.service.WishListServiceInt;

@RestController
@RequestMapping(value = "Wish")
public class WishListCtl extends BaseCtl<WishListForm, WishListDTO, WishListServiceInt> {

	@Autowired
	WishListServiceInt wishListService;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Raj");
		ORSResponse res = new ORSResponse(true);
		WishListDTO dto = new WishListDTO();
		List<DropdownList> list = wishListService.search(dto, userContext);
		res.addResult("Wlist", list);
		return res;
	}
}
