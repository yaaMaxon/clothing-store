import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardSlice';
import cartSlice from './cartSlice';
import reviewsReducer from './reviewsSlice';
import filterReducer from './filterSlice';
import filterByBrandReducer from './filterByBrandSlice';

export const store = configureStore({
    reducer: {
        cards: cardReducer,
        cart: cartSlice,
        reviews: reviewsReducer,
        filter: filterReducer,
        filterByBrand: filterByBrandReducer
    }
});