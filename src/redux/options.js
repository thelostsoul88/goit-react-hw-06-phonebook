import { toast } from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  postContacts,
  removeContacts,
} from 'services/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    return await getContacts();
  } catch (error) {
    toast.error(`Error - ${error.message}. Oops something wrong.`);
  }
});

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      return await postContacts(contact);
    } catch (error) {
      toast.error(`Error - ${error.message}. Oops something wrong.`);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async contactsId => {
    try {
      return await removeContacts(contactsId);
    } catch (error) {
      toast.error(`Error - ${error.message}. Oops something wrong.`);
    }
  }
);

const contactsFuncArr = [fetchContacts, addContacts, deleteContacts];
export const status = type => contactsFuncArr.map(el => el[type]);
