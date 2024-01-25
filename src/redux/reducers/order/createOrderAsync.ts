import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { CreateOrder, Order } from "../../../types/orderDto";

export const createOrderAsync = createAsyncThunk<
    Order,
    CreateOrder,
    { rejectValue: AxiosError }
>("orders/createOrder", async (order, { rejectWithValue }) => {

    const access_token = localStorage.getItem("access_token");
    const config = {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    };
    try {

        const response = await axios.post(
            "http://20.218.124.180/api/v1/orders",
            order, config
        );

        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        return rejectWithValue(error);
    }
});
