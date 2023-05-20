import { contactsInitialState } from './contactsInitialState';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from 'redux/contacts/actions';

export const contactReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
    // return { ...state, contacts: [...state.contacts, action.payload] };
  },
  [deleteContact]: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  },
});

// export const contactReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case ADDCONTACT:
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case DELETECONTACT:
// return {
//   ...state,
//   contacts: state.contacts.filter(
//     contact => contact.id !== action.payload
//   ),
// };

//     default:
//       return state;
//   }
// };
