import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://phonebook-backend-idmx.onrender.com/api/'; 


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
); 

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ _id, contact }, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${_id}`, contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  "contacts/favorite",
  async ({ contactId, favorite }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}/favorite`, { favorite });
      return response.data.data.updatedContact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);