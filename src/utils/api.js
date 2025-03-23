
import { toast } from 'sonner';

const API_URL = 'http://localhost:5000/api';

// Helper function to handle API errors
const handleApiError = (error) => {
  console.error('API Error:', error);
  
  if (error.response && error.response.data) {
    if (error.response.data.msg) {
      toast.error(error.response.data.msg);
      return error.response.data.msg;
    } else if (error.response.data.errors && error.response.data.errors.length > 0) {
      toast.error(error.response.data.errors[0].msg);
      return error.response.data.errors[0].msg;
    }
  }
  
  toast.error('An unexpected error occurred');
  return 'An unexpected error occurred';
};

// Set auth token for requests
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw { response: { data } };
    }
    
    setAuthToken(data.token);
    return data;
  } catch (error) {
    return { error: handleApiError(error) };
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    console.log("Login Request:", { email, password }); // Debugging step

    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    console.log("Login Response:", data); // Debugging step

    if (!response.ok) {
      throw { response: { data } };
    }

    setAuthToken(data.token);
    return data;
  } catch (error) {
    return { error: handleApiError(error) };
  }
};

// Get current user profile
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return { error: 'No auth token found' };
    }
    
    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw { response: { data } };
    }
    
    return data;
  } catch (error) {
    return { error: handleApiError(error) };
  }
};

// Update user profile
export const updateUserProfile = async (userData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return { error: 'No auth token found' };
    }
    
    const response = await fetch(`${API_URL}/users/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(userData)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw { response: { data } };
    }
    
    return data;
  } catch (error) {
    return { error: handleApiError(error) };
  }
};

// Logout user
export const logoutUser = () => {
  setAuthToken(null);
};
