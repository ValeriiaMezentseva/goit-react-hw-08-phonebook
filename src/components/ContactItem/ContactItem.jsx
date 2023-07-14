import React from 'react';

import {
    ItemUser,
    ContactWrapper,
    ContactLabel,
    UserIcon,
    EmailIcon,
    PhoneIcon,
    ButtonWrapper,
    EditIcon,
    DeleteIcon,
    HeartIcon,
    FilledHeartIcon,
    ContactsButton
} from './ContactItem.styled'

const ContactItem = ({
    _id,
    name,
    email,
    phone,
    favoriteStatus,
    editContact,
    removeContact,
    handleHeartClick
}) => {
    return (
        <ItemUser key={_id}>
            <ContactWrapper>
                <ContactLabel>
                    <UserIcon />
                    <span>{name}</span>
                </ContactLabel>
                <ContactLabel>
                    <EmailIcon />
                    <span>{email}</span>
                </ContactLabel>
                <ContactLabel>
                    <PhoneIcon />
                    <span>{phone}</span>
                </ContactLabel>
            </ContactWrapper>
            <ButtonWrapper>
                <ContactsButton type='button' onClick={() => handleHeartClick(_id)}>
                    {favoriteStatus ? <FilledHeartIcon /> : <HeartIcon />}
                </ContactsButton>
                <EditIcon onClick={() => editContact(_id)} />
                <DeleteIcon onClick={() => removeContact(_id)} />
            </ButtonWrapper>
        </ItemUser>
    ); 
}; 

export default ContactItem;