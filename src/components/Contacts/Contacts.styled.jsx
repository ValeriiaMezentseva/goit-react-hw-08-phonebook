import styled from "@emotion/styled";
import { FaUserCircle } from 'react-icons/fa';



export const UserIcon = styled(FaUserCircle)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
margin-right: 10px;
color: black;
font-size: 20px;
`

export const ItemUser = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
:not(:last-child) {
    margin-bottom: 20px;
    }
    :hover {
    color: #4287f5;
    border-color: #4287f5;
  }
`

export const ContactList = styled.ul` 
padding: 15px;
align-items: start;
 width: 100%;
 background-color: white; 
`

export const ContactsButton = styled.button`
width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #242323;
  font-size: 36px;
  border-radius: 5px;
  border: 2px solid #ccc;
  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;
  :hover {
    color: red;
    border-color: red;
  }
`;

export const ContactsTitle = styled.h2`
    text-align: center; 

`;


export const ContactsContainer = styled.div`
display: flex;
flex-direction: column;
 background-color: #ebf7ff;
`;

export const ContactLabel = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
   border-radius: 5px;
    border: 2px solid #ccc;
    width: 100%;
    height: 30px;
    margin-right: 10px;
`; 

export const TextSpan = styled.span`
 display: flex;
 justify-content: space-between;
 align-items: center;
  font-weight: 700;
`