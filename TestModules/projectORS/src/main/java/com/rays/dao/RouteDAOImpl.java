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
import com.rays.dto.RouteDTO;

@Repository
public class RouteDAOImpl extends BaseDAOImpl<RouteDTO> implements RouteDAOInt {

    @Override
    protected List<Predicate> getWhereClause(RouteDTO dto, CriteriaBuilder builder, Root<RouteDTO> qRoot) {

        List<Predicate> whereCondition = new ArrayList<>();

        if (!isEmptyString(dto.getName())) {
            whereCondition.add(builder.like(qRoot.get("name"), "%" + dto.getName() + "%"));
        }

        // Assuming startDate is of type LocalDate or java.util.Date in RouteDTO
        if (isNotNull(dto.getStartDate())) {
			// Assuming "registrationDate" field is of type java.util.Date or java.sql.Date
			Date searchDate = dto.getStartDate();

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
			Predicate datePredicate = builder.between(qRoot.get("startDate"), startDate, endDate);
			whereCondition.add(datePredicate);
		}

        if (!isZeroNumber(dto.getAllowSpeed())) {

			whereCondition.add(builder.equal(qRoot.get("allowSpeed"), dto.getAllowSpeed()));
		}

        if (!isEmptyString(dto.getVehicleId())) {
            whereCondition.add(builder.like(qRoot.get("vehicleId"), "%" + dto.getVehicleId() + "%"));
        }

        // Add additional conditions as needed

        return whereCondition;
    }

    @Override
    public Class<RouteDTO> getDTOClass() {
        return RouteDTO.class;
    }
}
