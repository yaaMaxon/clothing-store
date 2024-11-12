import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardSlice';
import cartSlice from './cartSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
    reducer: {
        cards: cardReducer,
        cart: cartSlice,
        filter: filterReducer
    }
});