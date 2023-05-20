import { createAction } from '@reduxjs/toolkit';

// export const filterContacts = filterValue => ({
//   type: FILTER,
//   payload: filterValue,
// });

export const filterContacts = createAction('FILTER');
