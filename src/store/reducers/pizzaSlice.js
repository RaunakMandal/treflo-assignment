import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { environment } from "../../environment";

const initialState = {
    pizzas: [],
    loading: false,
    error: "",
};

export const fetchPizzas = createAsyncThunk("pizzas/fetchPizzas", async () => {
    const response = await fetch(`${environment.API_URL}`);
    const pizzas = await response.json();
    return pizzas;
});

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.pizzas = [];
            state.loading = true;
        }),
            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzas = action.payload;
                state.loading = false;
            }),
            builder.addCase(fetchPizzas.rejected, (state) => {
                state.pizzas = [];
                state.loading = false;
                state.error = "Error fetching pizzas from API";
            });
    },
});

export default pizzaSlice.reducer;
