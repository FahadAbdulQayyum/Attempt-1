import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { products: [] },
    reducers: {
        increment: (state, action) => {
            (state.products.length > 0 && !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity += 1 : state.products.push(action.payload)
        },
        decrement: (state, action) => {
            (state.products.length > 0 && !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity -= 1 : state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            console.log('action||', action)
            state.products = state.products.filter(v => v._id !== action.payload._id)
            console.log('state.products.filter(v => v._id !== action.payload._id)||', state.products.filter(v => v._id !== action.payload._id))
            console.log('state.products||', state.products)
        }
    },
});

export const { increment, decrement, removeProduct } = counterSlice.actions;
export default counterSlice.reducer;
