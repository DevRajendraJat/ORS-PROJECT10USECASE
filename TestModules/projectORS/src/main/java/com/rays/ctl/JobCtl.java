package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.JobDTO;
import com.rays.dto.LeadDTO;
import com.rays.form.JobForm;
import com.rays.service.JobServiceInt;
import com.rays.service.LeadServiceInt;

@RestController
@RequestMapping(value = "Job")
public class JobCtl extends BaseCtl<JobForm, JobDTO, JobServiceInt> {
	@Autowired
	private JobServiceInt jobServiceInt;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Rahul");
		ORSResponse res = new ORSResponse(true);
		JobDTO dto = new JobDTO();
		List<DropdownList> list = jobServiceInt.search(dto, userContext);
		res.addResult("Jlist", list);
		return res;
	}
}