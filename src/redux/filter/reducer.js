import { filterInitialState } from './filterInitialState';
import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from 'redux/filter/actions';

export const filterReducer = createReducer(filterInitialState, {
  [filterContacts]: (state, action) => {
    return { ...state, filter: action.payload };
  },
});

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case FILTER:
//       return { ...state, filter: action.payload };

//     default:
//       return state;
//   }
// };
