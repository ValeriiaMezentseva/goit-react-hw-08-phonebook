import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/operations';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { LoaderSpinner } from 'components/Loader/Loader';
import { selectContacts, selectFilter, selectOperation } from 'redux/phonebook/selectors';
import { ItemUser, UserIcon, ContactList, ContactsButton, ContactsTitle, ContactsContainer, ContactLabel, TextSpan, NameText } from './Contacts.styled';


const ContactsList = () => {
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const operation = useSelector(selectOperation); 
    
    const removeContact = id => {
        try {
            dispatch(deleteContact(id));
            Notify.success(`Contact was successfully removed from your phonebook`);
        } catch (error) {
            Notify.error(`Something went wrong`);
    }
    };
    
 const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
    const filtredContacts = getFilteredContacts();
    

    return (
        <ContactsContainer>
            <ContactsTitle> My contacts </ContactsTitle>
            {filtredContacts.length > 0 ? (
                <ContactList>
                    <NameText>
                    <TextSpan> Name: </TextSpan>
                        <TextSpan>Phone number: </TextSpan>
                        </NameText>
                    {filtredContacts.map(({ id, name, number }) => (
                        <ItemUser key={id}>
                            <ContactLabel>   <UserIcon /> {name} </ContactLabel>
                            <ContactLabel>{number} </ContactLabel>
                            <ContactsButton onClick={() => removeContact(id)}>
                                {operation === id ? <LoaderSpinner /> : <TiDeleteOutline />}</ContactsButton>
                        </ItemUser>
                    ))}
                </ContactList>
            ) : (<p > There is no contacts  </p>)}
        </ContactsContainer>
    );
};

export default ContactsList; 