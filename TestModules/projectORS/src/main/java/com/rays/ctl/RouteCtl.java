package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.RouteDTO;
import com.rays.form.RouteForm;
import com.rays.service.RouteServiceInt;

@RestController
@RequestMapping(value = "/Route")
public class RouteCtl extends BaseCtl<RouteForm, RouteDTO, RouteServiceInt> {

    @Autowired
    private RouteServiceInt routeService;

    @GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload for RouteCtl");
        ORSResponse res = new ORSResponse(true);
        RouteDTO dto = new RouteDTO();
        List<DropdownList> list = routeService.search(dto, userContext);
        res.addResult("Rlist", list);
        return res;
    }
}
