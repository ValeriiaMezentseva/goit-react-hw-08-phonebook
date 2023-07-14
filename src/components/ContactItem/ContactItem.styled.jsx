import styled from "@emotion/styled";
import { FaUserCircle } from 'react-icons/fa';
import { BsTrash} from 'react-icons/bs'; 
import { FiEdit } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md'; 
import {FaRegHeart, FaHeart} from 'react-icons/fa';

export const ItemUser = styled.li` 
display: flex; 
align-items: center;
padding: 10px;
font-size: 24px;
color: ${props => props.theme.colors.primaryDarkText};
border: 1px solid rgb(200, 200, 200);
border-radius: 10px;
cursor: pointer;
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
  border-color:${props => props.theme.colors.normalDark};
  }
`;

export const ContactWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: flex-start;
gap: 10px;
color: ${props => props.theme.colors.primaryDarkText};
@media screen and (max-width: 479px) {
  font-size: 20px;
  }
`; 

export const ContactLabel = styled.div`
display: flex; 
`; 

export const UserIcon = styled(FaUserCircle)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
border-color: ${props => props.theme.colors.primaryDarkText};
margin-right: 10px;
fill: ${props => props.theme.colors.primaryDarkText}
font-size: 20px;
`; 

export const EmailIcon = styled(MdAlternateEmail)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
margin-right: 10px;
border-color: ${props => props.theme.colors.primaryDarkText};
fill: ${props => props.theme.colors.primaryDarkText}
font-size: 20px;
`;

export const PhoneIcon = styled(AiOutlinePhone)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
margin-right: 10px;
border-color: ${props => props.theme.colors.primaryDarkText};
fill: ${props => props.theme.colors.primaryDarkText};
font-size: 20px;
`;

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
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

export const HeartIcon = styled(FaRegHeart)`
fill: ${props => props.theme.colors.primaryDarkText};
font-size: 24px;

  &:hover,
  &:active {
    fill: #c95366;
  }
      @media screen and (max-width: 479px) {
  font-size: 22px;
  }
`;

export const FilledHeartIcon = styled(FaHeart)`
fill: #c95366;
font-size: 24px;

  &:active {
    fill: #c95366;
  }
      @media screen and (max-width: 479px) {
  font-size: 22px;
  }
`;

export const EditIcon = styled(FiEdit)`
color: ${props => props.theme.colors.primaryDarkText};
font-size: 26px;

&:hover {
  color: green;
  border-color: green;
  }
    @media screen and (max-width: 479px) {
  font-size: 22px;
  }
`

export const DeleteIcon = styled(BsTrash )`
fill: ${props => props.theme.colors.primaryDarkText};
font-size: 28px;
&:hover {
  fill: red;
  border-color: red;
  }

  @media screen and (max-width: 479px) {
  font-size: 22px;

  }
`; 
