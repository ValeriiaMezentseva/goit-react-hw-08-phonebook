import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        id: null,
    },
    reducers: {
        setModal: (state, action) => {
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                id: action.payload,
            };
        },
    },
}); 

export const modalReducer = modalSlice.reducer;
export const { setModal } = modalSlice.actions;