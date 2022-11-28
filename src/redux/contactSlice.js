import { createSlice, nanoid } from '@reduxjs/toolkit';

const initalContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initalContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    // deleteContact(state, action) {
    //   const index = state.contacts.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.contacts.splice(index, 1);
    // },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeValue } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
