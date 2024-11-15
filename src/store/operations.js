import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataItems } from "../services/api";


export const getCardItems = createAsyncThunk("cards/getCardItems", async (_, thunkAPI) => {
    try {
      const cards = await getDataItems();

      return cards;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
