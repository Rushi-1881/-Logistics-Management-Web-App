package com.rushi.zeromile.repository;

import com.rushi.zeromile.model.Parcel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ParcelRepository extends JpaRepository<Parcel, Long> {
    List<Parcel> findByDriverId(Long driverId);
}
