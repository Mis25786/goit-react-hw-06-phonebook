import { ADDCONTACT, DELETECONTACT, FILTER } from './types';

export const addContact = contactValue => ({
  type: ADDCONTACT,
  payload: contactValue,
});
export const deleteContact = id => ({ type: DELETECONTACT, payload: id });

export const filterContacts = filterValue => ({
  type: FILTER,
  payload: filterValue,
});
