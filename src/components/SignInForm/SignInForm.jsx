import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";

const SignInForm = () => {
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
      const { user, token } = await signIn(formData);
      localStorage.setItem('token', token);
      setUser(user);
      navigate('/dashboard');
    } catch (e) {
      console.error(e);
      setMessage('Invalid credentials. Please try again.');
    }
  };

  const isFormInvalid = () => {
    return formData.username === '' || formData.password === '';
  };

  return (
    <main>
      <h1>Sign In</h1>
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
          <button disabled={isFormInvalid()} type="submit">Sign In</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignInForm;
