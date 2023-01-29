import styled from "@emotion/styled";
import { FaUserCircle } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md'; 



export const UserIcon = styled(FaUserCircle)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
margin-right: 10px;
fill: black; 
font-size: 20px;
`; 
export const PhoneIcon = styled(AiOutlinePhone)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
margin-right: 10px;
fill: black; 
font-size: 20px;
`;

export const EditIcon = styled(MdModeEditOutline)`
fill: black; 
font-size: 24px;
border-radius: 5px;
padding: 5px;
border: 2px solid #5cc8bf8a;
:hover {
  fill: green;
  border-color: green;
  }
`

export const DeleteIcon = styled(TiDeleteOutline)`
fill: black; 
font-size: 24px;
border-radius: 5px;
padding: 5px;
border: 2px solid #5cc8bf8a;
:hover {
  fill: red;
  border-color: red;
  }
`; 

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5px;
`


export const ContactList = styled.ul` 
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 5px;
  margin: 5px;
`;

export const ItemUser = styled.li` 
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
font-size: 24px;
border: 1px solid rgb(200, 200, 200);
border-radius: 10px;
cursor: pointer;
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
  border-color:#5cc8bf8a;
  }
`;

export const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
@media screen and (max-width: 479px) {
  font-size: 20px;
  }
`

export const ContactLabel = styled.div`
display: flex;
align-items: center;
gap: 12px;
`; 

export const ContactsButton = styled.button`
  padding: 0;
  align-items: center;
  border: none; 
  justify-content: center;
  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;
`;

export const EmptyText = styled.div `
padding: 10px;
text-align: center;
`
