import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { User } from "../../../types/User";

export const authenticateUserAsync = createAsyncThunk<
  User,
  string,
  { rejectValue: AxiosError }
>("authenticateUserAsync", async (access_token, { rejectWithValue }) => {

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const response = await axios.get(
      `http://20.218.124.180/api/v1/users/profile`,
      config
    );
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return rejectWithValue(error);
  }
});
