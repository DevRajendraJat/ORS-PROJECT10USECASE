
package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_route")
public class RouteDTO extends BaseDTO {

    @Column(name = "NAME", length = 50)
    private String name;

    @Column(name = "START_DATE")
    private Date startDate;

    @Column(name = "ALLOW_SPEED",length = 50)
    private Long allowSpeed;

    @Column(name = "VEHICLE_ID", length = 50)
    private String vehicleId;

    @Override
    public String getValue() {
        return vehicleId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

   
  

    public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Long getAllowSpeed() {
		return allowSpeed;
	}

	public void setAllowSpeed(Long allowSpeed) {
		this.allowSpeed = allowSpeed;
	}

	public String getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}

	@Override
    public String getUniqueKey() {
        return "vehicleId"; // Adjust as per your unique key requirement
    }

    @Override
    public String getUniqueValue() {
        return vehicleId; // Adjust as per your unique value requirement
    }

    @Override
    public String getLabel() {
        return "vehicleId"; // Adjust as per your label requirement
    }

    @Override
    public LinkedHashMap<String, String> orderBY() {
        LinkedHashMap<String, String> map = new LinkedHashMap<>();
        map.put("vehicleId", "asc"); // Adjust as per your ordering requirement
        return map;
    }

    @Override
    public LinkedHashMap<String, Object> uniqueKeys() {
        LinkedHashMap<String, Object> map = new LinkedHashMap<>();
        map.put("vehicleId", vehicleId); // Adjust as per your unique keys requirement
        return map;
    }

}
