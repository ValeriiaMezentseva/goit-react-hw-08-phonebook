import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: { isOpen: false },
    reducers: {
        toggle: state => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const formReducer = formSlice.reducer; 
export const { toggle: toggleFormAction } = formSlice.actions;