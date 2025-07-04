package com.rushi.zeromile.dto;

public class ParcelStatusRequest {
    private Long parcelId;
    private String status;

    public Long getParcelId() { return parcelId; }

    public void setParcelId(Long parcelId) { this.parcelId = parcelId; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }
}
