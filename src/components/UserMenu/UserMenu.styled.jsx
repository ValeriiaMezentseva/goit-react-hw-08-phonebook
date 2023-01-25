import styled from "@emotion/styled";
import { BsPersonBadge } from 'react-icons/bs';

export const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 12px;
`; 

export const UserName = styled.p`
font-weight: 500;
font-size: 20px;
display: flex;
color: #5cc8bf;
align-items: center;
`; 

export const Icon = styled(BsPersonBadge)`
padding: 0;
font-size: 26px;
fill: #5cc8bf;
margin-right: 3px;
`

export const Button = styled.button`
border: 1px solid #02bfae;
text-align: center;
margin-top: 15px;
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
`; 