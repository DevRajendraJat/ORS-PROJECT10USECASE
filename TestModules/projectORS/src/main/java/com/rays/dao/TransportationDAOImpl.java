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
import com.rays.dto.TransportationDTO;

@Repository
public class TransportationDAOImpl extends BaseDAOImpl<TransportationDTO> implements TransportationInt {

    @Override
    protected List<Predicate> getWhereClause(TransportationDTO dto, CriteriaBuilder builder, Root<TransportationDTO> qRoot) {
        List<Predicate> whereCondition = new ArrayList<>();

        if (!isEmptyString(dto.getMode())) {
            whereCondition.add(builder.like(qRoot.get("mode"), dto.getMode() + "%"));
        }

        if (!isEmptyString(dto.getDescription())) {
            whereCondition.add(builder.like(qRoot.get("description"), dto.getDescription() + "%"));
        }
        if (isNotNull(dto.getDate())) {
            // Assuming "date" field is of type java.util.Date or java.sql.Date
            Date searchDate = dto.getDate();

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
            Predicate datePredicate = builder.between(qRoot.get("date"), startDate, endDate);
            whereCondition.add(datePredicate);
        }

        if (!isZeroNumber(dto.getCost())) {
            whereCondition.add(builder.equal(qRoot.get("cost"), dto.getCost()));
        }

        if (!isZeroNumber(dto.getId())) {
            whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
        }

        return whereCondition;
    }

    @Override
    public Class<TransportationDTO> getDTOClass() {
        return TransportationDTO.class;
    }
}
