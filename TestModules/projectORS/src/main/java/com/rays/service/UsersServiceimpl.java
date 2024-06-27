package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.UsersDAOInt;
import com.rays.dto.UsersDTO;

@Service
@Transactional
public class UsersServiceimpl extends BaseServiceImpl<UsersDTO, UsersDAOInt> implements UsersServiceint {

}
