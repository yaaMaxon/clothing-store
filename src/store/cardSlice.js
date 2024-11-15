import { createSlice } from "@reduxjs/toolkit";
import { getCardItems } from "./operations";

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [],
        isLoading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
    builder
      .addCase(getCardItems.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCardItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(getCardItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    }
})

export const { setCardItems } = cardSlice.actions;
export default cardSlice.reducer;