import { createSlice } from '@reduxjs/toolkit';
import { User } from 'modals/User';
import { removeAccessToken } from 'utils/auth';
import { getUserThunk, loginThunk } from './authThunks';

interface State {
  login: {
    loading: boolean;
  };
  user: {
    data: User | null;
    loading: boolean;
    error: boolean;
  };
}

const initialState: State = {
  login: {
    loading: false,
  },
  user: {
    data: null,
    loading: false,
    error: false,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      removeAccessToken();
      window.location.href = '/auth/login';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.login.loading = true;
    });

    builder.addCase(getUserThunk.pending, (state) => {
      state.user.loading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.user.data = action.payload;
      state.user.loading = false;
    });
    builder.addCase(getUserThunk.rejected, (state) => {
      state.user.loading = false;
      state.user.error = true;
    });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
