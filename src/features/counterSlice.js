import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    // initialState: { value: [{ id: 0, name: 'Tomatoes', qnty: 1 }, { id: 1, name: 'Potatoes', qnty: 1 },] },
    initialState: { products: [] },
    reducers: {
        increment: (state, action) => {
            // state.value.find(v => v.id === action.payload).quantity += 1
            (state.products.length > 0 || !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity += 1 : state.products.push(action.payload)
            // state.products.push(action.payload)
            // state.products.find(v => v.id === action.payload) ? state.products.find(v => v.id === action.payload).quantity += 1 : state.products.push(action.payload)
        },
        decrement: (state, action) => {
            state.value.find(v => v.id === action.payload).qnty -= 1
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
