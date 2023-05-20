import { FILTER } from './types';
import { filterInitialState } from './filterInitialState';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
