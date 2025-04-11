import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signUp(formData);

      setUser(user);

      navigate('/dashboard');
    } catch (e) {
      console.error(e);
      setMessage('Sign up failed. Please try again.');
    }
  };

  const isFormInvalid = () => {
    return formData.username === '' || formData.password === '';
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <p style={{ color: 'red' }}>{message}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button disabled={isFormInvalid()} type="submit">Sign Up</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;
