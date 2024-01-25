import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const deleteProductAsync = createAsyncThunk<
  string,
  string,
  { rejectValue: AxiosError }
>("products/deleteProductAsync", async (productId, { rejectWithValue }) => {
  const access_token = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  try {
    const response = await axios.delete<boolean>(
      `http://20.218.124.180/api/v1/products/${productId}`, config
    );
    if (!response?.data) {
      throw new AxiosError("Could not delete product");
    }
    toast.success(`product has been deleted successfully`);
    return productId;
  } catch (e) {
    const error = e as AxiosError;
    toast.error(`product could not deleted`);
    return rejectWithValue(error);
  }
});
