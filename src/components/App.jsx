import { useSelector } from 'react-redux';
import { getContact } from '../redux/selectors';
import { Toaster } from 'react-hot-toast';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';

const App = () => {
  const contacts = useSelector(getContact);
  return (
    <>
      <h1 className="mt-5 mb-1 text-2xl font-mono font-bold">Phonebook</h1>
      <Form />
      <h2 className="text-2xl font-mono font-bold">
        {contacts <= 0 ? 'No contacts in phonebook!' : 'Contacts'}
      </h2>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <Toaster />
    </>
  );
};

export default App;
