import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    // initialState: { products: JSON.parse(sessionStorage.getItem('pd')) !== null ? JSON.parse(sessionStorage.getItem('pd')) : [] },
    initialState: { products: [] },
    reducers: {
        onLoad: (state, action) => {
            const loadedProducts = JSON.parse(sessionStorage.getItem('pd')) || [];
            return {
                ...state,
                products: loadedProducts,
            };
        },
        increment: (state, action) => {
            (state.products.length > 0 && !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity += 1 : state.products.push(action.payload)
            sessionStorage.setItem('pd', JSON.stringify(state.products))
        },
        decrement: (state, action) => {
            (state.products.length > 0 && !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity -= 1 : state.products.push(action.payload)
            sessionStorage.setItem('pd', JSON.stringify(state.products))
        },
        removeProduct: (state, action) => {
            console.log('action||', action)
            state.products = state.products.filter(v => v._id !== action.payload._id)
            console.log('state.products.filter(v => v._id !== action.payload._id)||', state.products.filter(v => v._id !== action.payload._id))
            console.log('state.products||', state.products)
            sessionStorage.setItem('pd', JSON.stringify(state.products))
        }
    },
});

export const { onLoad, increment, decrement, removeProduct } = counterSlice.actions;
export default counterSlice.reducer;
