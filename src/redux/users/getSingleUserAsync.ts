import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { User } from "../../types/User";

export const getSingleUsersAsync = createAsyncThunk(
  "users/getSingleUser",
  async (userId: number) => {
    try {
      const response = await axios.get<User>(
        `https://api.escuelajs.co/api/v1/users/${userId}`
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      return error;
    }
  }
);
