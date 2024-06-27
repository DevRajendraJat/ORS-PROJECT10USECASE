package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.ClientDAOInt;
import com.rays.dto.ClientDTO;
@Service
@Transactional
public class ClientserviceImpl extends BaseServiceImpl<ClientDTO, ClientDAOInt> implements ClientServiceint {

}
