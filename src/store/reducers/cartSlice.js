import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as it's not in the cart!`
                );
            }
            state.cart = newCart;
        },
        toggleQuantity: (state, action) => {
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart[index].quantity += action.payload.quantity;
            } else {
                console.warn(
                    `Can't toggle quantity for product (id: ${action.payload.id}) as it's not in the cart!`
                );
            }
            state.cart = newCart;
        }
    },
});

export const { addToCart, removeFromCart, toggleQuantity } = cartSlice.actions;

export default cartSlice.reducer;
