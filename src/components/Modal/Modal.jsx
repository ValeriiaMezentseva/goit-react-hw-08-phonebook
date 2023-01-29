import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { setModal } from 'redux/phonebook/sliceModal';
import EditModal from 'components/EditModal';
import { Backdrop, ModalContainer } from './Modal.styled';

const Modal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const onKeydown = e => {
            if (e.code === 'Escape') {
                dispatch(setModal());
            };
        };
        window.addEventListener('keydown', onKeydown);
        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [dispatch])

    const onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            dispatch(setModal());
        };
    };

    return createPortal(
        <Backdrop onClick={onBackdropClick}>
            <ModalContainer>
                <EditModal />
            </ModalContainer>
        </Backdrop>,
        document.querySelector('#modal-root')
    );
}; 

export default Modal; 