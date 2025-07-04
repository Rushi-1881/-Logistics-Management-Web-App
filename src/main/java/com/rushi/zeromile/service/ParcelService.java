package com.rushi.zeromile.service;

import com.rushi.zeromile.model.Parcel;
import com.rushi.zeromile.repository.ParcelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParcelService {

    @Autowired
    private ParcelRepository parcelRepo;

    public List<Parcel> getParcelsByDriverId(Long driverId) {
        return parcelRepo.findByDriverId(driverId);
    }

    public void updateParcelStatus(Long parcelId, String status) {
        Parcel parcel = parcelRepo.findById(parcelId)
                .orElseThrow(() -> new RuntimeException("Parcel not found"));
        parcel.setStatus(status);
        parcelRepo.save(parcel);
    }
}
