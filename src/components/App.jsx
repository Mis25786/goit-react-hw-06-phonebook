import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import css from './App.module.css';
import { addContact } from 'redux/contacts/actions';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  console.log('contacts :>> ', contacts);

  const isFirstRender = useRef(true);

  const createUser = data => {
    console.log('contacts :>> ', contacts);
    if (contacts.find(contact => contact.name === data.name)) {
      return Notify.info('This name already exists in the list');
    }
    dispatch(addContact({ ...data, id: nanoid() }));
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      // setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const contactList = JSON.stringify(contacts);

    if (contactList) {
      localStorage.setItem('contacts', contactList);
    }
  }, [contacts]);

  return (
    <>
      <div className={css.phonebook}>
        <h1 className={css['phonebook-title']}>Phonebook</h1>

        <ContactForm createUser={createUser} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
//!==================1111111111111================================
// import { useState, useEffect, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';

// import css from './App.module.css';

// export const App = () => {
//   const { contacts } = useSelector(state => state);
//   const dispatch = useDispatch();

//   const isFirstRender = useRef(true);

//   const createUser = data => {
//     if (contacts.find(contact => contact.name === data.name)) {
//       return Notify.info('This name already exists in the list');
//     }
//     dispatch({ type: 'addContact', payload: { ...data, id: nanoid() } });
//   };

//   useEffect(() => {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

//     if (parsedContacts) {
//       // setContacts(parsedContacts);
//     }
//   }, []);

//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       return;
//     }

//     const contactList = JSON.stringify(contacts);

//     if (contactList) {
//       localStorage.setItem('contacts', contactList);
//     }
//   }, [contacts]);

//   return (
//     <>
//       <div className={css.phonebook}>
//         <h1 className={css['phonebook-title']}>Phonebook</h1>

//         <ContactForm createUser={createUser} />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     </>
//   );
// };

//!==========================================================
// import { useState, useEffect, useRef } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';

// import css from './App.module.css';
// import { useSelector, useDispatch } from 'react-redux';

// export const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');
//   const isFirstRender = useRef(true);

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const createUser = data => {
//     if (contacts.find(contact => contact.name === data.name)) {
//       return Notify.info('This name already exists in the list');
//     }
//     setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }]);
//   };

//   const cangeFilter = e => {
//     setFilter(e.target.value);
//   };
//   //  const cangeFilter = ({ target: { value } }) => {
//   //    setFilter(value);
//   //  };

//   const getVisibleContacts = () => {
//     const normalizeFilterContact = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilterContact)
//     );
//   };

//   useEffect(() => {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

//     if (parsedContacts) {
//       setContacts(parsedContacts);
//     }
//   }, []);

//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       return;
//     }

//     const contactList = JSON.stringify(contacts);

//     if (contactList) {
//       localStorage.setItem('contacts', contactList);
//     }
//   }, [contacts]);

//   return (
//     <>
//       <div className={css.phonebook}>
//         <h1 className={css['phonebook-title']}>Phonebook</h1>

//         <ContactForm createUser={createUser} />

//         <h2>Contacts</h2>

//         <Filter filter={filter} cangeFilter={cangeFilter} />

//         <ContactList
//           contacts={getVisibleContacts()}
//           onDeleteContact={deleteContact}
//         />
//       </div>
//     </>
//   );
// }
