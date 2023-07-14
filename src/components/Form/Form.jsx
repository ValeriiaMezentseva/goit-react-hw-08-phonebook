import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix';

import { Loader } from 'components/Loader/Loader';
import { selectContacts, selectOperation} from 'redux/phonebook/selectors';
import { addContact, fetchContacts } from 'redux/phonebook/operations';

import addContactPic from '../../pictures/contact.png';

import {  FormWrapper, Title, FormBox, Label, Input, Error, FormButton, FormStyled, ButtonBox, Image, ImageContainer, FormContainer  } from './Form.styled';

const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const emailRegExp = /^\w+([.-]?\w+){2}@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const numberPattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
    name: yup.string().matches(namePattern, "Name is not valid").required(),
    email: yup.string().matches(emailRegExp, 'Your email must be valid').lowercase().required(),
    phone: yup.string().min(6).max(24).matches(numberPattern, 'Phone number is not valid').required(),
});

const initialValues = {
    name: '',
    email: '',
    phone: '',
}; 

const ContactsForm = () => {
    const navigate = useNavigate();
   

    const contacts = useSelector(selectContacts);
    const operation = useSelector(selectOperation);
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        const isIncluded = contacts.some(contact => contact.email.toLowerCase() === values.email.toLowerCase());
        if (isIncluded) {
            Notify.failure(`${values.email} is already in your contacts`)
            return;
        }

        const newContact = {
            name: values.name,
            email: values.email,
            phone: values.phone,
        };
    
        try {
            dispatch(addContact(newContact));
            Notify.success(`${values.name} was successfully added to  your contacts`);
            resetForm();
            navigate('/contacts');
            dispatch(fetchContacts());
        } catch (error) {
            Notify.failure(`Something went wrong`);
        };


    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <FormWrapper>
                <FormContainer>
                    
                    <FormStyled autoComplete="off">
                        <Title>Create a contact</Title>
                        <FormBox>
                            <Label htmlFor='name'>
                                Name
                                <Input
                                    id='name'
                                    type="text"
                                    name='name'
                                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                />
                                <Error name='name' component='div' />
                            </Label>
                            <Label htmlFor='email'>
                                Email
                                <Input
                                    id='email'
                                    type="text"
                                    name='email'
                                    title="Please enter a valid email address"
                                />
                                <Error name='email' component='div' />
                            </Label>
                            <Label htmlFor='phone'>
                                Number
                                <Input
                                    id='phone'
                                    type="tel"
                                    name='phone'
                                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                />
                                <Error name='phone' component='div' />
                            </Label>
                        </FormBox>
                        <ButtonBox>
                            <FormButton type="submit"> {operation === 'add' ? <Loader /> : 'Add contact'}  </FormButton>
                        </ButtonBox>
                    </FormStyled>
                </FormContainer>
                <ImageContainer>
                    <Image src={addContactPic} alt='adding contact' />
                </ImageContainer>
            </FormWrapper>
        </Formik>
    );
     
};
    
export default ContactsForm;