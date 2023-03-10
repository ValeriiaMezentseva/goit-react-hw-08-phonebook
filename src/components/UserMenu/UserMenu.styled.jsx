import styled from "@emotion/styled";
import { BsPersonBadge } from 'react-icons/bs';

export const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 12px;
 @media screen and (max-width: 680px) {
flex-direction: column; 
gap: 0px; 
  };
`; 

export const UserName = styled.p`
font-size: 20px;
display: flex;
margin: 0;
color: #013370ec;
align-items: center;
 @media screen and (max-width: 680px) {
margin-top: 5px;
margin-bottom: 10px; 
margin-right: 5px;
  };
`; 

export const Icon = styled(BsPersonBadge)`
padding: 0;
font-size: 26px;
fill: #41bbd7;
margin-right: 3px;
`

export const Button = styled.button`
border: 1px solid #02bfae;
text-align: center;
margin-top: 10px;
padding: 10px 20px;
margin-right: 10px; 
font-size: 17px;
font-weight: 700;
line-height: 27px;
background: #41bbd7;
border-radius: 4px;
box-shadow: rgba(46, 191, 240, 0.4) 2px 2px;
white-space: nowrap;
overflow: hidden;
color: white;
text-overflow: ellipsis;
transition: background-color .2s ease;
 outline: none;
 cursor: pointer;
    margin-bottom: 10px;
:hover {
  box-shadow: #2c6cbb97 0 -25px 18px -14px inset,#79cfefb3 0 1px 2px;
  transform: scale(1.05);
}
 @media screen and (max-width: 680px) {
margin: 0;
margin-right: 5px;
margin-bottom: 5px;
padding: 6px 20px;
  };
`; 