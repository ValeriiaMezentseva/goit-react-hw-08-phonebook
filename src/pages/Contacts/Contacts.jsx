import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchContacts} from "redux/phonebook/operations";
import { toggleFilterAction } from "redux/phonebook/sliceFilter";
import { selectOpenFilter, selectError, selectOperation, selectModal} from 'redux/phonebook/selectors';

import ContactsList from "components/Contacts/Contacts";
import Filter from "components/Filter";
import { Loader } from "components/Loader/Loader";


import { Section, ContactsTitle, ContactsWrapper, BtnWrapper, FormButton } from "./Contacts.styled";


const ContactsPage = () => {
  const isOpenFilter = useSelector(selectOpenFilter);
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleFilterAction());
  }

  useEffect(() => {
    if (!modal) {
      dispatch(fetchContacts());
    }
  }, [dispatch, modal]);


  return (
    <>
      {operation === 'fetch' && !error ? <Loader /> : (
        <Section>
          <ContactsWrapper>
            <ContactsTitle>My contacts</ContactsTitle>
            <BtnWrapper>
              <FormButton type="button" onClick={toggle} isOpen={isOpenFilter}>{isOpenFilter ? 'Close' : 'Find a contact'}</FormButton>
            </BtnWrapper>
            {isOpenFilter && (<Filter />)}

            <ContactsList />
            {error && <div> Something went wrong! Please try again! </div>}
          </ContactsWrapper>
        </Section>
      )}
    </>
  );
};

export default ContactsPage; 