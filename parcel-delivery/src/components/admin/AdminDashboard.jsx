// src/components/admin/AdminDashboard.jsx

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, THead, TRow, TCell } from "@/components/ui/table";
import axios from "axios";
import { FaClipboardList, FaExclamationTriangle, FaUserCheck, FaChartBar } from "react-icons/fa";

const AdminDashboard = () => {
  const [dailySummary, setDailySummary] = useState([]);
  const [failedDeliveries, setFailedDeliveries] = useState([]);
  const [driverPerformance, setDriverPerformance] = useState([]);

  useEffect(() => {
    fetchDailySummary();
    fetchFailedDeliveries();
    fetchDriverPerformance();
  }, []);

  const fetchDailySummary = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/daily-summary");
      setDailySummary(res.data);
    } catch (err) {
      console.error("Error fetching summary", err);
    }
  };

  const fetchFailedDeliveries = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/failed-deliveries");
      setFailedDeliveries(res.data);
    } catch (err) {
      console.error("Error fetching failed deliveries", err);
    }
  };

  const fetchDriverPerformance = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/driver-performance");
      setDriverPerformance(res.data);
    } catch (err) {
      console.error("Error fetching performance", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 font-sans p-8">
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">📊 Admin Analytics Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Daily Summary */}
        <Card className="rounded-xl shadow-md bg-white transition-transform hover:scale-105 duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
              <FaClipboardList className="mr-2" /> Daily Delivery Summary
            </h3>
            <Table>
              <THead headers={["Date", "Total", "Success", "Failed"]} />
              <tbody>
                {dailySummary.map((d, i) => (
                  <TRow key={i} className="hover:bg-blue-50">
                    <TCell>{d.date}</TCell>
                    <TCell>{d.total}</TCell>
                    <TCell>{d.success}</TCell>
                    <TCell>{d.failed}</TCell>
                  </TRow>
                ))}
              </tbody>
            </Table>
          </CardContent>
        </Card>

        {/* Failed Deliveries */}
        <Card className="rounded-xl shadow-md bg-white transition-transform hover:scale-105 duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-red-600">
              <FaExclamationTriangle className="mr-2" /> Failed Deliveries
            </h3>
            <Table>
              <THead headers={["Parcel ID", "Driver", "Reason"]} />
              <tbody>
                {failedDeliveries.map((f, i) => (
                  <TRow key={i} className="hover:bg-red-50">
                    <TCell>{f.parcelId}</TCell>
                    <TCell>{f.driverName}</TCell>
                    <TCell>{f.reason}</TCell>
                  </TRow>
                ))}
              </tbody>
            </Table>
          </CardContent>
        </Card>

        {/* Driver Performance */}
        <Card className="rounded-xl shadow-md bg-white transition-transform hover:scale-105 duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
              <FaChartBar className="mr-2" /> Driver Performance
            </h3>
            <Table>
              <THead headers={["Driver", "Deliveries", "Efficiency (%)"]} />
              <tbody>
                {driverPerformance.map((d, i) => (
                  <TRow key={i} className="hover:bg-green-50">
                    <TCell>{d.name}</TCell>
                    <TCell>{d.totalDeliveries}</TCell>
                    <TCell>{d.efficiency}</TCell>
                  </TRow>
                ))}
              </tbody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
