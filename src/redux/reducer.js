import { combineReducers } from 'redux';
import { filterReducer } from './filter/reducer';
import { contactReducer } from './contacts/reducer';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
