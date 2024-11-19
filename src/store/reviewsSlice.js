import { createSlice } from "@reduxjs/toolkit";
import { getReviewsItems } from "./operations";

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        isLoading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
    builder
      .addCase(getReviewsItems.pending, (state, {payload}) => {
        state.isLoading = true;
      })
      .addCase(getReviewsItems.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = payload;
      })
      .addCase(getReviewsItems.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
      });
    }
})

export default reviewsSlice.reducer;
