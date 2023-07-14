import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
  addToFavorite,
} from "redux/phonebook/operations";

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.operation = null;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        operation: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.operation = "fetch";
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.operation = null;
                state.isLoading = false;
                state.error = null;
                state.items = action.payload.data.result;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, (state) => {
                state.operation = "add";
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.operation = null;
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload.data.newContact);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, (state, action) => {
                state.operation = `${action.meta.arg}`;
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    (contact) => contact._id === action.payload.data.deletedContact._id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(editContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.operation = null;
                const index = state.items.findIndex(
                    (contact) => contact._id === action.payload.data.updatedContact._id
                );
                state.items.splice(index, 1, action.payload.data.updatedContact);
            })
            .addCase(editContact.rejected, handleRejected)
            .addCase(addToFavorite.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addToFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const updatedContact = action.payload;
                state.items = state.items.map((contact) =>
                    contact._id === updatedContact._id ? updatedContact : contact
                );
            })
            .addCase(addToFavorite.rejected, handleRejected);
    },
});

export const contactsReducer = contactsSlice.reducer;