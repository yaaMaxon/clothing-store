import { createSlice } from "@reduxjs/toolkit";

const filterByBrand = createSlice({
    name: 'filterByBrand',
    initialState: '',
    reducers: {
        searchByBrandFilter(state, {payload}) {
            return payload;
        }
    }
})

export const { searchByBrandFilter } = filterByBrand.actions;
export default filterByBrand.reducer;