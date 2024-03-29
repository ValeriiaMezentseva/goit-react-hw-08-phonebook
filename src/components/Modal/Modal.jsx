import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { setModal } from 'redux/phonebook/sliceModal';
import EditModal from 'components/EditModal';

import { Backdrop, ModalContainer, CloseIcon } from './Modal.styled';


const Modal = () => {
    const dispatch = useDispatch();

    const onBtnClick = () => {
            dispatch(setModal());
    };

    return createPortal(
        <Backdrop>
            <ModalContainer>
                <CloseIcon onClick={onBtnClick}/>
                <EditModal />
            </ModalContainer>
        </Backdrop>,
        document.querySelector('#modal-root')
    );
}; 

export default Modal; 