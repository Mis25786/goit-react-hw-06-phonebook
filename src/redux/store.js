import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

// export const store = createStore(reducer);
export const store = configureStore({ reducer });

//!===========================1111111111111==========================
// import { createStore } from '@reduxjs/toolkit';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'addContact':
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case 'deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };

//     case 'filter':
//       return { ...state, filter: action.payload };

//     default:
//       return state;
//   }
// };

// export const store = createStore(reducer, { contacts: [], filter: '' });
