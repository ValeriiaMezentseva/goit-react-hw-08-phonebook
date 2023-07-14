import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/phonebook/selectors';
import { setFilter } from 'redux/phonebook/sliceFilter';

import { FilterWrapper, Input, Icon, } from './Filter.styled';


const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const onChangeFilter = e => {
        dispatch(setFilter(e.currentTarget.value))
    };
    return (
        <FilterWrapper>
            <Icon />
            <Input onChange={onChangeFilter} name="filter" type="text" placeholder='Type in the name' value={filter}></Input>
        </FilterWrapper>
    );
}; 

export default Filter; 