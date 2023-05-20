import { FILTER } from './types';

export const filterContacts = filterValue => ({
  type: FILTER,
  payload: filterValue,
});
