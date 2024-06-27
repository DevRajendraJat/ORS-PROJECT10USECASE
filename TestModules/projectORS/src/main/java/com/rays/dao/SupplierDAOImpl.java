package com.rays.dao;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.SupplierDTO;

@Repository
public class SupplierDAOImpl extends BaseDAOImpl<SupplierDTO> implements SupplierDAOInt {

	@Override
	protected List<Predicate> getWhereClause(SupplierDTO dto, CriteriaBuilder builder, Root<SupplierDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getName())) {
			whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
		}

		if (!isEmptyString(dto.getCategory())) {
			whereCondition.add(builder.like(qRoot.get("category"), dto.getCategory() + "%"));
		}

		if (isNotNull(dto.getRegistrationDate())) {
			// Assuming "registrationDate" field is of type java.util.Date or java.sql.Date
			Date searchDate = dto.getRegistrationDate();

			// Define start and end dates for the search day
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(searchDate);
			calendar.set(Calendar.HOUR_OF_DAY, 0); // Start of the day
			calendar.set(Calendar.MINUTE, 0);
			calendar.set(Calendar.SECOND, 0);
			Date startDate = calendar.getTime();

			calendar.set(Calendar.HOUR_OF_DAY, 23); // End of the day
			calendar.set(Calendar.MINUTE, 59);
			calendar.set(Calendar.SECOND, 59);
			Date endDate = calendar.getTime();

			// Create predicate for date range
			Predicate datePredicate = builder.between(qRoot.get("registrationDate"), startDate, endDate);
			whereCondition.add(datePredicate);
		}


		if (!isZeroNumber(dto.getPaymentTerm())) {

			whereCondition.add(builder.equal(qRoot.get("paymentTerm"), dto.getPaymentTerm()));
		}


		if (!isZeroNumber(dto.getId())) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}
		return whereCondition;
	}

	@Override
	public Class<SupplierDTO> getDTOClass() {
		return SupplierDTO.class;
	}
}
