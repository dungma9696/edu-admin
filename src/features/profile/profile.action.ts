import { getProfile } from "@/api/auth.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfileRequest = createAsyncThunk(
  "get/getProfileRequest",
  async (_props: void, { rejectWithValue }) => {
    try {
      const response = await getProfile();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
