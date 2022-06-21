import { createAsyncThunk } from '@reduxjs/toolkit';
import { RoleCode } from 'constants/roles';
import { User } from 'modals/User';
import { getAccessToken, setAccessToken } from 'utils/auth';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (role: RoleCode) => {
    // fake login
    await new Promise((res) => {
      setTimeout(() => {
        setAccessToken(`${role}_This_is_fake_token`);
        res(role);
      }, 1000);
    });
    window.location.href = '/';
    return role;
  },
);

export const getUserThunk = createAsyncThunk('auth/getUser', async () => {
  // fake get user
  const token = getAccessToken() as string;
  const user: User = {
    id: 1,
    name: 'Misa198',
    role: token.split('_')[0] as RoleCode,
  };
  await new Promise((res) => {
    setTimeout(() => {
      res(user);
    }, 1000);
  });
  return user;
});
