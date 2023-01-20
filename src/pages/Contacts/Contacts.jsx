import ContactsForm from "components/Form/Form";
import ContactsList from "components/Contacts/Contacts";
import Filter from "components/Filter";
import { Loader } from "components/Loader/Loader";
import { Container, Title } from "./Contacts.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectOpenFilter, selectError, selectOperation} from 'redux/phonebook/selectors';
import { useEffect } from "react";
import { fetchContacts } from "redux/phonebook/operations";
import { Helmet } from "react-helmet";


const ContactsPage = () => {
    const isOpenFilter = useSelector(selectOpenFilter);
    const error = useSelector(selectError);
    const operation = useSelector(selectOperation); 
    const dispatch = useDispatch(); 

     useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
        <Container>
           <Helmet>
        <Title> My Contacts </Title>
      </Helmet>
      <ContactsForm />
      {isOpenFilter && (<Filter />)}
      {operation === 'fetch' && !error ? <Loader /> : <ContactsList />}
            {error && <div> Something went wrong! Please try again! </div>}
        </Container>

    )
};

export default ContactsPage; 