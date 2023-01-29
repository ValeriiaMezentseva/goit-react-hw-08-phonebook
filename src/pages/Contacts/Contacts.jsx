import ContactsForm from "components/Form/Form";
import ContactsList from "components/Contacts/Contacts";
import Filter from "components/Filter";
import { Loader } from "components/Loader/Loader";
import { Section, ContactsContainer, ContactsTitle, ContactsWrapper, BtnWrapper, FormButton } from "./Contacts.styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts} from "redux/phonebook/operations";
import { useEffect } from "react";
import { toggleFilterAction } from "redux/phonebook/sliceFilter";
import { selectOpenFilter, selectError, selectOperation, selectModal, selectOpenForm} from 'redux/phonebook/selectors';
import { toggleFormAction } from "redux/phonebook/sliceForm";


const ContactsPage = () => {
  const isOpenFilter = useSelector(selectOpenFilter);
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  const modal = useSelector(selectModal);
  const isOpenForm = useSelector(selectOpenForm);
  const dispatch = useDispatch(); 
     const toggle = () => {
    dispatch(toggleFilterAction());
     }

  const toggleForm = () => {
    dispatch(toggleFormAction());
  }

  useEffect(() => {
    if (!modal) {
       dispatch(fetchContacts());
    }
  }, [dispatch, modal]);


  return (
      <Section>
        <ContactsContainer>
          <ContactsWrapper>
            <ContactsTitle>My contacts list</ContactsTitle>
            <BtnWrapper>
            <FormButton type="button" onClick={toggle} isOpen={isOpenFilter}>{isOpenFilter ? 'Close' : 'Search'}</FormButton>
              <FormButton type='button'onClick={toggleForm} isOpen={isOpenForm}>{isOpenForm ? 'Close' : 'Add new contact'}</FormButton>
              </BtnWrapper>
            {isOpenFilter && (<Filter />)}
            {isOpenForm && ( <ContactsForm />)}
          {operation === 'fetch' && !error  ? <Loader /> : <ContactsList />}
            {error && <div> Something went wrong! Please try again! </div>}
            </ContactsWrapper>
          </ContactsContainer>
        </Section>

    )
};

export default ContactsPage; 