package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.JobDTO;

@Repository
public class JobDAOImpl extends BaseDAOImpl<JobDTO> implements JobDAOInt {

	@Override
	protected List<Predicate> getWhereClause(JobDTO dto, CriteriaBuilder builder, Root<JobDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getTitle())) {

			whereCondition.add(builder.like(qRoot.get("title"), dto.getTitle() + "%"));
		}

		if (!isEmptyString(dto.getStatus())) {

			whereCondition.add(builder.like(qRoot.get("status"), dto.getStatus() + "%"));
		}

		if (!isEmptyString(dto.getExperience())) {

			whereCondition.add(builder.like(qRoot.get("experience"), dto.getExperience() + "%"));
		}

		if (isNotNull(dto.getDateofOpening())) {

			whereCondition.add(builder.equal(qRoot.get("dateofOpening"), dto.getDateofOpening()));
		}

		return whereCondition;
	}

	@Override
	public Class<JobDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return JobDTO.class;
	}

}
