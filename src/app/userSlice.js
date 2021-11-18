import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

let generateUID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newUser = {
        id: generateUID(),
        email: action.payload.email,
        password: action.payload.password,
      };
      state.push(newUser);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
