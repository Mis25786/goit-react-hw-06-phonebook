// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/actions';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const cangeFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };

  return (
    <div className={css.filter}>
      <span className={css['filter-text']}>Find contact by name</span>

      <input
        className={css.input}
        type="text"
        name="name"
        value={filter}
        onChange={cangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   cangeFilter: PropTypes.func.isRequired,
// };

export default Filter;
//!============================111111111111111============================
// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import css from './Filter.module.css';

// const Filter = () => {
//   const { filter } = useSelector(state => state);
//   const dispatch = useDispatch();

//   const cangeFilter = e => {
//     const filterValue = e.target.value;
//     dispatch({ type: 'filter', payload: filterValue });
//   };

//   return (
//     <div className={css.filter}>
//       <span className={css['filter-text']}>Find contacts by name</span>

//       <input
//         className={css.input}
//         type="text"
//         name="name"
//         value={filter}
//         onChange={cangeFilter}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </div>
//   );
// };

// // Filter.propTypes = {
// //   filter: PropTypes.string.isRequired,
// //   cangeFilter: PropTypes.func.isRequired,
// // };

// export default Filter;

//!==========================================================
// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

// const Filter = ({ filter, cangeFilter }) => {
//   return (
//     <div className={css.filter}>
//       <span className={css['filter-text']}>Find contacts by name</span>

//       <input
//         className={css.input}
//         type="text"
//         name="name"
//         value={filter}
//         onChange={cangeFilter}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </div>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   cangeFilter: PropTypes.func.isRequired,
// };

// export default Filter;
