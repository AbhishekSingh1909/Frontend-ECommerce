import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { UserAddress } from "../../../types/Address";



export const getAddressAsync = createAsyncThunk<
    UserAddress,
    void,
    { rejectValue: AxiosError }
>("address/getAddressAsync", async (_, { rejectWithValue }) => {

    const access_token = localStorage.getItem("access_token");
    const config = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {
        const response = await axios.get(
            "http://20.218.124.180/api/v1/addresses", config
        );

        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        return rejectWithValue(error);
    }
});
