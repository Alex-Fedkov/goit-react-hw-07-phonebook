import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { 
  Item,
  List,
  Click
} from "./styles";


const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  useEffect(() => {
  dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
      <div >
        {children}
        <ul>
          {contactsList.map(({ name, phone, id }) => (
            <li key={id}>
              <Item>
              <List>{name}:</List>
              <List>{phone}</List>
              <Click type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Click>
              </Item>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default ContactList;