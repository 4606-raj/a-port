import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "@/api/auth.api";

/**
 * Async Actions
 */
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authApi.login(payload);
      localStorage.setItem("token", data.token);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const fetchMe = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.me();
      return data;
    } catch {
      return rejectWithValue("Session expired");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authApi.logout();
  localStorage.removeItem("token");
});

/**
 * Slice
 */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    resetAuthState: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ME
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
