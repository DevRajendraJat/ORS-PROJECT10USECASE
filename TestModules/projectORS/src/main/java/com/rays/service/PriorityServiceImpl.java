package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.PriorityDAOInt;
import com.rays.dto.PriorityDTO;

@Service
@Transactional
public class PriorityServiceImpl extends BaseServiceImpl<PriorityDTO, PriorityDAOInt> implements PriorityServiceInt {

}
