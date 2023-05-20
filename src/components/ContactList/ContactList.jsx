import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  console.log('contacts :>> ', contacts);
  console.log('filter :>> ', filter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizeFilterContact = filter.toLowerCase();
    console.log('normalizeFilterContact :>> ', normalizeFilterContact);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterContact)
    );
  };

  const arryFilterContacts = getVisibleContacts();

  return (
    <ul>
      {arryFilterContacts.map(({ id, name, number }) => (
        <li key={id} className={css['ContactList-item']}>
          <p className={css['ContactList-text']}>{name}</p>
          <p className={css['ContactList-text']}>{number}</p>

          <button
            onClick={() => dispatch(deleteContact(id))}
            className={css['ContactList-delete']}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
//!=========================11111111111===========================
// import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// const ContactList = () => {
//   const { contacts } = useSelector(state => state);
//   const { filter } = useSelector(state => state);

//   const dispatch = useDispatch();

//   const getVisibleContacts = () => {
//     const normalizeFilterContact = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilterContact)
//     );
//   };

//   const arryFilterContacts = getVisibleContacts();

//   return (
//     <ul>
//       {arryFilterContacts.map(({ id, name, number }) => (
//         <li key={id} className={css['ContactList-item']}>
//           <p className={css['ContactList-text']}>{name}</p>
//           <p className={css['ContactList-text']}>{number}</p>

//           <button
//             onClick={() => dispatch({ type: 'deleteContact', payload: id })}
//             className={css['ContactList-delete']}
//           >
//             delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// // ContactList.propTypes = {
// //   contacts: PropTypes.arrayOf(
// //     PropTypes.exact({
// //       id: PropTypes.string.isRequired,
// //       name: PropTypes.string.isRequired,
// //       number: PropTypes.string.isRequired,
// //     })
// //   ),
// //   onDeleteContact: PropTypes.func.isRequired,
// // };

// export default ContactList;

//!==========================================================
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id} className={css['ContactList-item']}>
//         <p className={css['ContactList-text']}>{name}</p>
//         <p className={css['ContactList-text']}>{number}</p>

//         <button
//           onClick={() => onDeleteContact(id)}
//           className={css['ContactList-delete']}
//         >
//           delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
