package com.rushi.zeromile.model;

import jakarta.persistence.*;

@Entity
public class Parcel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String status;
    private Long driverId;

    // ✅ Add this to fix the mappedBy error
    @ManyToOne
    @JoinColumn(name = "route_id")
    private Route route;

    // Getters & Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }

    public Long getDriverId() { return driverId; }

    public void setDriverId(Long driverId) { this.driverId = driverId; }

    public Route getRoute() { return route; }

    public void setRoute(Route route) { this.route = route; }
}
