import { createSlice } from "@reduxjs/toolkit";
import { MIN_PRICE, MAX_PRICE } from "../constants/price";


const initialState = {
   min: MIN_PRICE,
   max: MAX_PRICE
};


const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      changeFilter(state, {payload}) {
        const {min, max} = payload
         
         state.min = min;
         state.max = max;
      }
   }
})

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;