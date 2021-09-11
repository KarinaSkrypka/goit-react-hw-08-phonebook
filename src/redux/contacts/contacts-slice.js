import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { changeFilter } from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (name, number) => {
    const contact = {
      name,
      number,
    };
    const { data } = await axios.post('/contacts', contact);
    console.log(data);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  contactId => {
    return axios.delete(`contacts/${contactId}`);
  },
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  //   reducers: {
  //     changeFilter: (_, { payload }) => payload,
  //   },
  extraReducers: {
    [addContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      //   return {
      //     ...state,
      //     items: [...state.items, payload],
      //     isLoading: true,
      //     error: null,
      //   };
      state.items = [...state.items, payload];
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected]: (state, _) => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...payload];
    },
    [fetchContacts.rejected]: state => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected]: state => {
      state.isLoading = false;
      state.error = 'Error';
    },
    [changeFilter]: (_, { payload }) => payload,
  },
});

// export const { changeFilter } = contactsSlice.actions;

export const contactsReducerWithSlice = contactsSlice.reducer;
