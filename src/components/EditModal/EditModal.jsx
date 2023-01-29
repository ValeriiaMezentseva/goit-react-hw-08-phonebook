import { Formik } from "formik";
import * as yup from 'yup'; 
// import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "redux/phonebook/sliceModal";
import { editContact } from "redux/phonebook/operations";
import { selectContacts, selectId } from "redux/phonebook/selectors";
import { FormStyled, FormBox, Label, Input, Button , Error} from "./EditModal.styled";


const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberPattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
    name: yup.string().matches(namePattern, "Name is not valid").required(),
    number: yup.string().min(6).max(24).matches(numberPattern, 'Phone number is not valid').required(),
});


const EditModal = () => {

    const contacts = useSelector(selectContacts);
    const contactId = useSelector(selectId);

    const dispatch = useDispatch();
    const contactData = contacts.find(({ id }) => id === contactId);
    const { id, name, number } = contactData;
    
    const initialValues = {
        name: name,
        number: number,
    };

    const handleSubmit = values => {
        try {
            dispatch(editContact({ id, contact: values }));
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
                        <Label htmlFor='number'>
                            Number
                            <Input
                                id='number'
                                type='tel'
                                name='number'
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            />
                            <Error name='number' component='div' />
                        </Label>
                    </FormBox>
                    <Button type="submit">Save changes</Button>
                </FormStyled>
        </Formik>
    );
};

export default EditModal;