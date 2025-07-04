// src/components/auth/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'VENDOR'  // Default role for now
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted: ", formData);
    // TODO: Call backend API
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="VENDOR">Vendor</option>
          <option value="DRIVER">Driver</option>
          <option value="ADMIN">Admin</option>
        </select><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
