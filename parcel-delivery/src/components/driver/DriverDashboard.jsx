// src/components/driver/DriverDashboard.jsx

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { Table, THead, TRow, TCell } from "@/components/ui/table";
import axios from "axios";

const DriverDashboard = () => {
  const [assignedParcels, setAssignedParcels] = useState([]);

  useEffect(() => {
    fetchAssignedParcels();
  }, []);

  const fetchAssignedParcels = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/driver/parcels");
      setAssignedParcels(res.data);
    } catch (err) {
      console.error("Error fetching driver parcels", err);
    }
  };

  const updateStatus = async (parcelId, newStatus) => {
    try {
      await axios.put(`http://localhost:8080/api/driver/update-status/${parcelId}`, {
        status: newStatus,
      });
      fetchAssignedParcels(); // refresh
    } catch (err) {
      console.error("Status update failed", err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">🚚 Driver Dashboard</h2>

      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Assigned Parcels</h3>
          <Table>
            <THead headers={["Parcel ID", "Address", "Status", "Actions"]} />
            <tbody>
              {assignedParcels.map((parcel) => (
                <TRow key={parcel.id}>
                  <TCell>{parcel.id}</TCell>
                  <TCell>{parcel.address}</TCell>
                  <TCell>{parcel.status}</TCell>
                  <TCell>
                    <Button onClick={() => updateStatus(parcel.id, "Delivered")}>Delivered</Button>
                    <Button onClick={() => updateStatus(parcel.id, "Failed")}>Failed</Button>
                  </TCell>
                </TRow>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverDashboard;
