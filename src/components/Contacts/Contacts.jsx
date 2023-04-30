import { useDispatch, useSelector } from 'react-redux';
import { getContact, getFilter } from '../../redux/selectors';
import { removeContact } from '../../redux/reducer';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const handleFilter = useSelector(getFilter);
  const visible = contacts.filter(e =>
    e.name.toLowerCase().includes(handleFilter.toLowerCase())
  );

  return (
    <>
      <ul className="ml-5">
        {visible.map(({ id, name, number }) => {
          return (
            <li key={id} className="mb-2">
              {name}: {number}
              <button
                className="ml-3 bg-red-400 rounded-md p-0.5 font-light hover:bg-red-600 hover:text-white hover:shadow-lg"
                type="button"
                onClick={() => {
                  dispatch(removeContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
