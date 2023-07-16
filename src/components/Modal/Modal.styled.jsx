import styled from "@emotion/styled";
import { IoMdClose} from 'react-icons/io';

export const CloseIcon = styled(IoMdClose)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 38px;
  height: 38px;
  right: 18px;
  top: 18px;
  font-weight: 600;
  border: none; 
  cursor: pointer;
text-align: center;
color: ${props => props.theme.colors.normalDark};
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
  color: red;
  }
`;

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
`; 

export const ModalContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
padding: 50px;
width: 60%;
background-color: ${props => props.theme.colors.modal};
border-radius: 30px;
transform: translate(-50%, -50%) scale(1);
@media screen and (min-width: 768px) {
    padding: 70px;
    width: 50%;
}
`; 

// export const CloseButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   width: 44px;
//   height: 44px;
//   right: 18px;
//   top: 18px;
//   font-size: 28px;
//   font-weight: 600;
//   background: transparent; 
//   border: none; 
//   cursor: pointer;
// `;
