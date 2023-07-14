import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items; 
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.value; 
export const selectOpenFilter = state => state.filter.isOpen; 
export const selectOperation = state => state.contacts.operation; 
export const selectModal = state => state.modal.isModalOpen; 
export const selectId = state => state.modal.id; 
export const selectOpenForm = state => state.form.isOpen;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);