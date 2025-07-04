import { login } from '../../services/authService';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await login(formData);
    alert('Login Success!');
    console.log(res.data);
    localStorage.setItem("token", res.data.token);
    // TODO: Navigate to dashboard
  } catch (err) {
    console.error(err);
    alert('Login Failed');
  }
};
