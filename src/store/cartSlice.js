import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bags: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart (state, {payload}) {
            state.bags = [...state.bags, payload]
        },
        removeItemFromCart (state, {payload}) {
            state.bags = state.bags.filter(item => item.id !== payload)
        },
        changeItemQuantity(state, {payload: {id, quantity}}) {
            const bagToUpdate = state.bags.find((bag) => bag.id === id)
           
            bagToUpdate.quantity = quantity 
        }
    }
})

export const { addItemToCart, removeItemFromCart, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;