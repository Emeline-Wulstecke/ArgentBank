// auth.actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);

      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Response:', response);

      if (!response.ok) {
        console.log('Response is not OK:', response);
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const token = data.body.token;

      console.log('Data:', data);
      console.log('Token:', token);

      localStorage.setItem('token', token);

      if (rememberMe) {
        sessionStorage.setItem('token', token);
      }

      return data;

    } catch (error) {
      console.error('Error:', error);
      return rejectWithValue(error.message);
    }
  }
);


export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token'); // Supprimez le token du local storage
      sessionStorage.removeItem('token'); // Supprimez le token de la session

      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile, status: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.body) {
        throw new Error('Invalid profile data');
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUsername= createAsyncThunk(
  'auth/updateUserName',
  async (userName, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user name');
      }

      const data = await response.json();

      return data.body.userName;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
