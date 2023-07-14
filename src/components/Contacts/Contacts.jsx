import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { deleteContact, addToFavorite } from 'redux/phonebook/operations';
import { selectModal, selectFilteredContacts } from 'redux/phonebook/selectors';
import { setModal } from 'redux/phonebook/sliceModal';

import Modal from 'components/Modal';
import ContactItem from 'components/ContactItem';

import { ContactList, NoContactsBox, NoContactsImg, NoContactsText } from './Contacts.styled';


const ContactsList = () => {
    const dispatch = useDispatch();
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

  const [favoriteStatus, setFavoriteStatus] = useState({});

  useEffect(() => {
    const initialFavoriteStatus = {};
    filtredContacts.forEach((contact) => {
      initialFavoriteStatus[contact._id] =
        localStorage.getItem(`favorite_${contact._id}`) === 'true';
    });
    setFavoriteStatus(initialFavoriteStatus);
  }, [filtredContacts]);

  const handleHeartClick = (contactId) => {
    const updatedFavoriteStatus = { ...favoriteStatus };
    updatedFavoriteStatus[contactId] = !updatedFavoriteStatus[contactId];
    setFavoriteStatus(updatedFavoriteStatus);
    const updatedFavorite = updatedFavoriteStatus[contactId];
    dispatch(addToFavorite({ contactId, favorite: updatedFavorite }));
    localStorage.setItem(`favorite_${contactId}`, updatedFavorite.toString());
  };
    
    return (
        <>
            {filtredContacts.length > 0 ? (
                <ContactList>
                    {filtredContacts.map(({ _id, name, email, phone }) => (
            <ContactItem
              key={_id}
              _id={_id}
              name={name}
              email={email}
              phone={phone}
              favoriteStatus={favoriteStatus[_id]}
              editContact={editContact}
              removeContact={removeContact}
              handleHeartClick={handleHeartClick}
            />
          ))}
                </ContactList>
            ) : (
                    <NoContactsBox>
                        <NoContactsImg />
                        <NoContactsText>There are no contacts 🤷</NoContactsText>
                    </NoContactsBox>
            )}
            {modal && <Modal />}
        </>
    );
}; 

export default ContactsList;