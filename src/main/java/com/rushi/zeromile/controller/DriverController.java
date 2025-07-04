package com.rushi.zeromile.controller;

import com.rushi.zeromile.dto.ParcelStatusRequest;
import com.rushi.zeromile.model.Parcel;
import com.rushi.zeromile.service.ParcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/driver")
@CrossOrigin("*")
public class DriverController {

    @Autowired
    private ParcelService parcelService;

    @GetMapping("/assigned-parcels/{driverId}")
    public List<Parcel> getAssignedParcels(@PathVariable Long driverId) {
        return parcelService.getParcelsByDriverId(driverId);
    }

    @PostMapping("/update-status")
    public String updateStatus(@RequestBody ParcelStatusRequest request) {
        parcelService.updateParcelStatus(request.getParcelId(), request.getStatus());
        return "Status updated";
    }
}
