import { register } from '../../services/authService';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await register(formData);
    alert('Registration Success!');
    console.log(res.data);
    // Optionally: navigate to login
  } catch (err) {
    console.error(err);
    alert('Registration Failed');
  }
};
