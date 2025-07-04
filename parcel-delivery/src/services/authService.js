// src/services/authService.js
import axios from 'axios';

const API = 'http://localhost:8080/api/users';

export const register = async (userData) => {
  return await axios.post(`${API}/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API}/login`, userData);
};
