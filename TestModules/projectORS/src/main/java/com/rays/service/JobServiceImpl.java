package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.JobDAOInt;
import com.rays.dto.JobDTO;

@Service
@Transactional
public class JobServiceImpl extends BaseServiceImpl<JobDTO, JobDAOInt> implements JobServiceInt {

}
