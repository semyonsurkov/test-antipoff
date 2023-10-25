import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    detailedUser: {
      picture: { medium: '' },
      name: { first: '', last: '' },
      phone: '',
      email: '',
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchUsersStart: (state) => {
      state.isLoading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setDetailedUser: (state, action) => {
      state.detailedUser = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  setDetailedUser,
} = usersSlice.actions;

export default usersSlice.reducer;
