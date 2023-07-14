import { useSelector, useDispatch } from "react-redux";

import { selectOpenFilter, selectError, selectIsLoading} from 'redux/phonebook/selectors';
import { toggleFilterAction } from "redux/phonebook/sliceFilter";

import FavoriteList from 'components/FavoriteList';
import Filter from "components/Filter";
import { Loader } from "components/Loader/Loader";

import { Section, ContactsTitle, ContactsWrapper, BtnWrapper, FormButton } from "../Contacts/Contacts.styled";

const FavoriteContacts = () => {
    const isOpenFilter = useSelector(selectOpenFilter);
    const error = useSelector(selectError);
    const loading = useSelector(selectIsLoading);
    
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggleFilterAction());
    }

    return (
        <>
            {loading && !error ? <Loader /> : (
                <Section>
                    <ContactsWrapper>
                        <ContactsTitle>Favorite contacts</ContactsTitle>
                        <BtnWrapper>
                            <FormButton type="button" onClick={toggle} isOpen={isOpenFilter}>{isOpenFilter ? 'Close' : 'Find a contact'}</FormButton>
                          
                        </BtnWrapper>
                        {isOpenFilter && (<Filter />)}
                        <FavoriteList />
                        {error && <div> Something went wrong! Please try again! </div>}
                    </ContactsWrapper>
                </Section>
            )}
        </>
    );
};

export default FavoriteContacts;