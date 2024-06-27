package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.WishListDTO;

@Repository
public class WishListDAOImpl extends BaseDAOImpl<WishListDTO> implements WishListDAOint {

	@Override
	protected List<Predicate> getWhereClause(WishListDTO dto, CriteriaBuilder builder, Root<WishListDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getProduct())) {

			whereCondition.add(builder.like(qRoot.get("product"), dto.getProduct() + "%"));
		}

		/*
		 * if (!isEmptyString(dto.getDate())) {
		 * 
		 * whereCondition.add(builder.like(qRoot.get("date"), dto.getDate())); }
		 */
		if (!isEmptyString(dto.getUserName())) {

			whereCondition.add(builder.like(qRoot.get("userName"), dto.getUserName() + "%"));
		}
		
		if (!isEmptyString(dto.getUserName())) {

			whereCondition.add(builder.like(qRoot.get("userName"), dto.getUserName()));
		}
		if (isNotNull(dto.getDate())) {

			whereCondition.add(builder.equal(qRoot.get("date"), dto.getDate()));
		}

		if (!isEmptyString(dto.getRemark())) {

			whereCondition.add(builder.like(qRoot.get("remark"), dto.getRemark()));
		}

		return whereCondition;
	}

	@Override
	public Class<WishListDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return WishListDTO.class;
	}

}
