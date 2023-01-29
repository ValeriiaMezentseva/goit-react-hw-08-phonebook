import { selectFilter } from 'redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, Input, Icon, InputWrapper } from './Filter.styled';
import { setFilter } from 'redux/phonebook/sliceFilter';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value))
  }; 
    return (
        <FilterWrapper>
            <InputWrapper>
                <Icon /> <Input onChange={onChangeFilter} name="filter" type="text" placeholder='Find a contact by name' value={filter}></Input>
                </InputWrapper>
        </FilterWrapper>
    )
};

export default Filter; 