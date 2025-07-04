// src/components/customer/TrackParcel.jsx

import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState("");
  const [parcelInfo, setParcelInfo] = useState(null);

  const handleTrack = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/parcel/track/${trackingId}`);
      setParcelInfo(res.data);
    } catch (err) {
      alert("Tracking ID not found!");
      setParcelInfo(null);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">📍 Track Parcel</h2>

      <Card className="mb-6">
        <CardContent className="flex gap-4 items-center">
          <Input
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <Button onClick={handleTrack}>Track</Button>
        </CardContent>
      </Card>

      {parcelInfo && (
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Tracking Info</h3>
            <p><strong>ID:</strong> {parcelInfo.id}</p>
            <p><strong>Status:</strong> {parcelInfo.status}</p>
            <p><strong>Address:</strong> {parcelInfo.address}</p>
            <p><strong>Last Updated:</strong> {parcelInfo.lastUpdated}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TrackParcel;
