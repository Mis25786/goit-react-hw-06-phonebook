import { ADDCONTACT, DELETECONTACT } from './types';
import { contactsInitialState } from './contactsInitialState';

export const contactReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case ADDCONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETECONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
