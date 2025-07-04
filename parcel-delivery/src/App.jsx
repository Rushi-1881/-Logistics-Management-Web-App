import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';

import VendorDashboard from './components/vendor/VendorDashboard';
import DriverDashboard from './components/driver/DriverDashboard';
import TrackParcel from "./components/customer/TrackParcel";
import AdminDashboard from './components/admin/AdminDashboard';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, THead, TRow, TCell } from "@/components/ui/table";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/customer" element={<TrackParcel />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
