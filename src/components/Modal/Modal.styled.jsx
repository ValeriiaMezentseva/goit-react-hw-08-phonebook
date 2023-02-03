import styled from "@emotion/styled";
import { AiOutlineClose } from 'react-icons/ai';

export const CloseIcon = styled(AiOutlineClose)`
    text-align: center;
    fill: #02bfae; 
     transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
  fill: red;
  }
`

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.3);
`; 

export const ModalContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
padding: 24px;
padding-top: 46px;
width: 90%;
background-color: #e7ecf2;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 10px;
transform: translate(-50%, -50%) scale(1);
@media screen and (min-width: 480px) {
    padding: 36px;
    padding-top: 54px;
    width: 460px;
}
@media screen and (min-width: 768px) {
    width: 582px;
    }
@media screen and (max-width: 479px) {
    width: 300px;
    }
`; 

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 10px;
  top: 10px;
  font-size: 28px;
  font-weight: 500;
  background: transparent; 
  border: none; 
  box-sizing: border-box;
 border-radius: 4px;
 @media screen and (max-width: 479px) {
 width: 38px;
  height: 38px;
    }
/* display: block;
position: absolute; 
left: 91%; 
bottom: 88%; 
font-size: 25px;
border: 1px solid #02bfae;
text-align: center;
background: #5cc8bff9; 
border-radius: 4px;
box-shadow: rgba(46, 191, 240, 0.4) 2px 2px;
:hover {
  transform: scale(1.05);
}
@media screen and (max-width: 479px) {
   left: 86%; 
bottom: 89%;
font-size: 20px;
    } */

`
