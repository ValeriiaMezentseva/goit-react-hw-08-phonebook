import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { setModal } from 'redux/phonebook/sliceModal';
import EditModal from 'components/EditModal';
import { Backdrop, ModalContainer, CloseButton, CloseIcon } from './Modal.styled';



const Modal = () => {
    const dispatch = useDispatch();

    const onBtnClick = () => {
            dispatch(setModal());
    };

    return createPortal(
        <Backdrop>
            <ModalContainer>
                <CloseButton type="button" onClick={onBtnClick}><CloseIcon/></CloseButton>
                <EditModal />
            </ModalContainer>
        </Backdrop>,
        document.querySelector('#modal-root')
    );
}; 

export default Modal; 