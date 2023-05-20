import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
// import { filterReducer } from './filter/reducer';
// import { contactReducer } from './contacts/reducer';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
