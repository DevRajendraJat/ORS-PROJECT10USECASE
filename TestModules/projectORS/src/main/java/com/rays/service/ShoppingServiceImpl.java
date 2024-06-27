package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.ShoppingDAOInt;
import com.rays.dto.ShopingCartDTO;

@Service
@Transactional
public class ShoppingServiceImpl extends BaseServiceImpl<ShopingCartDTO, ShoppingDAOInt> implements ShoppingServiceInt {

}
