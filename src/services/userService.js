const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/auth`;

// Sign Up
export const signUp = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Sign Up failed');
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Sign In
export const signIn = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Sign In failed');
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get all users (for dashboard)
export const getAllUsers = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${import.meta.env.VITE_EXPRESS_BACKEND_URL}/users`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
