import { ADDCONTACT, DELETECONTACT } from './types';

export const addContact = contactValue => ({
  type: ADDCONTACT,
  payload: contactValue,
});

export const deleteContact = id => ({ type: DELETECONTACT, payload: id });
