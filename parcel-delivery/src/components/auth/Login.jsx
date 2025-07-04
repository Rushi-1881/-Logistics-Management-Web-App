import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('vendor'); // Default role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy logic for now (replace with actual backend login call)
    if (role === 'vendor') navigate('/vendor');
    else if (role === 'driver') navigate('/driver');
    else if (role === 'customer') navigate('/customer');
    else if (role === 'admin') navigate('/admin');
    else navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="vendor">Vendor</option>
          <option value="driver">Driver</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
