import { Formik} from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import {  FormWrapper, FormBox, Label, Input, Error, FormButton, FormStyled, ButtonBox  } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectOperation} from 'redux/phonebook/selectors';
// import { toggleFilterAction } from "redux/phonebook/sliceFilter";
import { addContact } from 'redux/phonebook/operations';

const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberPattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
    name: yup.string().matches(namePattern, "Name is not valid").required(),
    number: yup.string().min(6).max(24).matches(numberPattern, 'Phone number is not valid').required(),
});

const initialValues = {
    id: '',
    name: '',
    number: '',
}; 

const ContactsForm = () => {

    const contacts = useSelector(selectContacts); 
    const operation = useSelector(selectOperation);
    // const isOpenFilter = useSelector(selectOpenFilter);
    const dispatch = useDispatch();  
//     const toggle = () => {
//     dispatch(toggleFilterAction());
//   }
    const handleSubmit = (values, { resetForm }) => {  
        const isIncluded = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
        if (isIncluded) {
            Notify.failure(`${values.name} is already in your contacts`)
            return;
        }
        values.id = nanoid(10);

        const newContact = {
            id: 'id' + nanoid(),
            name: values.name,
            number: values.number,
        };
        try {
            dispatch(addContact(newContact));
            Notify.success(`${values.name} was successfully added to  your contacts`);
            resetForm();
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
                 <FormStyled autoComplete="off">
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
                <Label htmlFor='number'>
                    Number
                     <Input
                         id='number'
                         type="tel"
                         name='number'
                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     />
                     <Error name='number' component='div' /> 
                         </Label>
                    </FormBox>
                    <ButtonBox>
                        <FormButton type="submit"> {operation === 'add' ? <Loader /> : 'Add contact'} </FormButton> 
                    </ButtonBox>
                 </FormStyled>
                 </FormWrapper>
            </Formik>
     )

       
 };
    
export default ContactsForm;