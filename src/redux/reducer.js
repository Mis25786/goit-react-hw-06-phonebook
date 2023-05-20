import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { ADDCONTACT, DELETECONTACT, FILTER } from './types';

export const contactReducer = (state = initialState.contacts, action) => {
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

export const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
