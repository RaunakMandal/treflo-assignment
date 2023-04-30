import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { environment } from "../../environment";

const initialState = {
    pizzas: [],
    filteredPizzas: [],
    filters: {
        veg: true,
        nonVeg: true,
    },
    sortDir: "price-asc",
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
    reducers: {
        filterPizzas: (state, action) => {
            if (action?.payload) {
                const { type, value } = action.payload;
                state.filters[type] = value;
            }

            const { veg, nonVeg } = state.filters;

            if (veg && nonVeg) {
                state.filteredPizzas = state.pizzas;
            }

            if (veg && !nonVeg) {
                state.filteredPizzas = state.pizzas.filter(
                    pizza => pizza.isVeg
                );

            }

            if (!veg && nonVeg) {
                state.filteredPizzas = state.pizzas.filter(
                    pizza => !pizza.isVeg
                );
            }

            if (!veg && !nonVeg) {
                state.filteredPizzas = [];
            }
        },
        sortPizzas: (state, action) => {
            if (action?.payload) {
                const { value } = action.payload;
                state.sortDir = value;
            }

            const { sortDir } = state;

            if (sortDir === "price-asc") {
                state.filteredPizzas.sort((a, b) => a.price - b.price);
            }

            if (sortDir === "price-desc") {
                state.filteredPizzas.sort((a, b) => b.price - a.price);
            }

            if (sortDir === "rating-asc") {
                state.filteredPizzas.sort((a, b) => a.rating - b.rating);
            }

            if (sortDir === "rating-desc") {
                state.filteredPizzas.sort((a, b) => b.rating - a.rating);
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.pizzas = [];
            state.loading = true;
        }),
            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.pizzas = action.payload;
                state.filteredPizzas = action.payload;
                state.loading = false;
                state.error = "";

                pizzaSlice.caseReducers.filterPizzas(state);
                pizzaSlice.caseReducers.sortPizzas(state);
            }),
            builder.addCase(fetchPizzas.rejected, (state) => {
                state.pizzas = [];
                state.loading = false;
                state.error = "Error fetching pizzas from API";
            });
    },
});

export const { filterPizzas, sortPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
