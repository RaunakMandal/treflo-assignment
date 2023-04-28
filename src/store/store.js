import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from './reducers/pizzaSlice'

export const store = configureStore({
    reducer: {
        pizza: pizzaSlice,
    },
})

