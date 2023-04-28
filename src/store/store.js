import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from './reducers/pizzaSlice'
import cartSlice from './reducers/cartSlice'

export const store = configureStore({
    reducer: {
        pizza: pizzaSlice,
        cart: cartSlice,
    },
})

