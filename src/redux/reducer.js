import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { initialState } from './initialState';

export const phonebookSlicer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.some(
          contact =>
            contact.name.toLowerCase() ===
            action.payload.name.toLowerCase().trim()
        )
          ? toast.error(`${action.payload.name} is already in the contact`)
          : state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      },
    },
    filterContact: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});
export const { addContact, removeContact, filterContact } =
  phonebookSlicer.actions;
export const phonebookReducer = phonebookSlicer.reducer;
