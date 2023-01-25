import { selectFilter } from 'redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, Title, Input, Icon, InputWrapper } from './Filter.styled';
import { setFilter } from 'redux/phonebook/sliceFilter';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value))
  }; 
    return (
        <FilterWrapper>
            <Title>Find a contact by name </Title>
            <InputWrapper>
                <Icon /> <Input onChange={onChangeFilter} name="filter" type="text" value={filter}></Input>
                </InputWrapper>
        </FilterWrapper>
    )
};

export default Filter; 