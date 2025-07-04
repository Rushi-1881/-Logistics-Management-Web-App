// src/components/vendor/VendorDashboard.jsx

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { Table, THead, TRow, TCell } from "@/components/ui/table";
import axios from "axios";

const VendorDashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [parcels, setParcels] = useState([]);

  // ✅ Fetch parcels from backend on mount
  useEffect(() => {
    fetchParcels();
  }, []);

  const fetchParcels = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/vendor/parcels");
      setParcels(response.data);
    } catch (error) {
      console.error("Failed to fetch parcels:", error);
    }
  };

  // ✅ File upload to backend
  const handleFileUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://localhost:8080/api/vendor/upload", formData);
      alert("File uploaded successfully!");
      fetchParcels(); // refresh table
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">📦 Vendor Dashboard</h2>

      <Card className="mb-6">
        <CardContent>
          <div className="flex gap-4 items-center">
            <Input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
            <Button onClick={handleFileUpload}>Upload Parcel List</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Uploaded Parcels</h3>
          <Table>
            <THead headers={["Parcel ID", "Status", "Address"]} />
            <tbody>
              {parcels.map((parcel) => (
                <TRow key={parcel.id}>
                  <TCell>{parcel.id}</TCell>
                  <TCell>{parcel.status}</TCell>
                  <TCell>{parcel.address}</TCell>
                </TRow>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorDashboard;
