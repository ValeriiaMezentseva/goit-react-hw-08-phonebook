import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/operations';
import { setModal } from 'redux/phonebook/sliceModal';
import Modal from 'components/Modal';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { LoaderSpinner } from 'components/Loader/Loader';
import { selectOperation, selectModal, selectFilteredContacts } from 'redux/phonebook/selectors';
import { ItemUser, UserIcon, ContactList, ContactsButton, ContactLabel, DeleteIcon, PhoneIcon, EditIcon, ContactWrapper, ButtonWrapper, EmptyText } from './Contacts.styled';


const ContactsList = () => {
    const dispatch = useDispatch();
    
    // const contacts = useSelector(selectContacts);
    // const filter = useSelector(selectFilter);
    const operation = useSelector(selectOperation); 
    const modal = useSelector(selectModal); 
    const filtredContacts = useSelector(selectFilteredContacts);

    const editContact = id => {
        dispatch(setModal(id)); 
    }

    
    const removeContact = id => {
        try {
            dispatch(deleteContact(id));
            Notify.success(`Contact was successfully removed from your phonebook`);
        } catch (error) {
            Notify.error(`Something went wrong`);
        }
    };

//  const getFilteredContacts = () => {
//     const normilizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter)
//     );
//   };
    // const filtredContacts = getFilteredContacts();
    

    return (
        <>
            {filtredContacts.length > 0 ? (
                <ContactList>
                    {filtredContacts.map(({ id, name, number }) => (
                        <ItemUser key={id}>
                            <ContactWrapper>
                                <ContactLabel>
                                    <UserIcon />
                                    <span>{name}</span>
                                </ContactLabel>
                                <ContactLabel>
                                    <PhoneIcon />
                                    <span>{number}</span>
                                </ContactLabel>
                            </ContactWrapper>
                            <ButtonWrapper>
                                <ContactsButton type='button' onClick={() => editContact(id)}>
                                    <EditIcon />
                                </ContactsButton>
                                <ContactsButton type='button' onClick={() => removeContact(id)}>
                                    {operation === id ? <LoaderSpinner /> : <DeleteIcon />}
                                </ContactsButton>
                            </ButtonWrapper>
                        </ItemUser>
                    ))}
                </ContactList>
            ) : (<EmptyText > There is no contacts 🤷 </EmptyText>)}
            {modal && <Modal />}
            </>
    );
};

export default ContactsList; 