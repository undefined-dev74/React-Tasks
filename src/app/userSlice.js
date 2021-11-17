import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, email: "JohnDoe@gmail.com", password: "12345" }];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userSelector = (state) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
