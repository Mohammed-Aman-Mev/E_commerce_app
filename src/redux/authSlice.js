import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const authSlice = createSlice({
  name: "authstate",
  initialState,
  reducers: "",
  extraReducers: (builder) => {
    // builder.addCase()
  },
});

export default authSlice.reducer;

export const register = createAsyncThunk("USER/REGISTER", async (data) => {
  console.log("register");
});

export const login = createAsyncThunk("USER/LOGIN", async () => {
  console.log("Login");
});
