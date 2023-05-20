import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addContact = contactValue => ({
//   type: ADDCONTACT,
//   payload: contactValue,
// });
// export const deleteContact = id => ({ type: DELETECONTACT, payload: id });

export const addContact = createAction('ADDCONTACT', data => {
  return { payload: { ...data, id: nanoid() } };
});
// export const addContact = createAction('ADDCONTACT');
export const deleteContact = createAction('DELETECONTACT');
