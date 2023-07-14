import { Formik } from "formik";
import * as yup from 'yup'; 
import { Notify } from "notiflix";
import { useDispatch, useSelector } from "react-redux";

import { setModal } from "redux/phonebook/sliceModal";
import { editContact } from "redux/phonebook/operations";
import { selectContacts, selectId } from "redux/phonebook/selectors";

import { FormStyled, Title, FormBox, Label, Input, Button, Error} from "./EditModal.styled";


const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const emailRegExp = /^\w+([.-]?\w+){2}@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const numberPattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
    name: yup.string().matches(namePattern, "Name is not valid").required(),
    email: yup.string().matches(emailRegExp, 'Your email must be valid').lowercase().required(),
    phone: yup.string().min(6).max(24).matches(numberPattern, 'Phone number is not valid').required(),
});


const EditModal = () => {

    const contacts = useSelector(selectContacts);
    const contactId = useSelector(selectId);

    const dispatch = useDispatch();
    const contactData = contacts.find(({ _id }) => _id === contactId);
    const { _id, name, email, phone } = contactData;
    
    const initialValues = {
        name: name,
        email: email,
        phone: phone,
    };

    const handleSubmit = values => {

        try {
            dispatch(editContact({ _id, contact: values }));
            dispatch(setModal());
            Notify.success(`Contact was successfully edited`);
        }
        catch (error) {
            Notify.error(`Something went wrong`);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <FormStyled autoComplete='off'>
                <Title> Make changes 👇 </Title>
                <FormBox>
                    <Label htmlFor='name'>
                        Name
                        <Input
                            id='name'
                            type='text'
                            name='name'
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                        <Error name='name' component='div' />
                    </Label>
                    <Label htmlFor='email'>
                        Email
                        <Input
                            id='email'
                            type='text'
                            name='email'
                            title="Please enter a valid email address"
                        />
                        <Error name='email' component='div' />
                    </Label>
                    <Label htmlFor='phone'>
                        Number
                        <Input
                            id='phone'
                            type='tel'
                            name='phone'
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        />
                        <Error name='phone' component='div' />
                    </Label>
                </FormBox>
                <Button type="submit">Save changes</Button>
            </FormStyled>
        </Formik>
    );
}; 

export default EditModal;