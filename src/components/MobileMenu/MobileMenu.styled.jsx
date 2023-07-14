import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { RiContactsBookLine } from 'react-icons/ri'; 
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { IoClose } from "react-icons/io5";

export const MobileMenuContainer = styled.div`
  height: 100%;
  padding: 10px;  
  position: fixed;
  top: 0;
  right: ${props => (props.open ? '0' : '-100%')};
  width: 250px;
  background-color: ${props => props.theme.colors.lightBackground};
  transition: right 0.3s ease-in-out;
   z-index: 2;

     @media screen and (min-width: 680px) {
   display:none; 
  }
`;

export const Nav = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    margin-top: 40px; 
`;

export const MobileMenuClose = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 1079px) {
    display: none; 
  }
`;

export const MobileMenuCloseIcon = styled(IoClose)`
  font-size: 34px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const Link = styled(NavLink)`
  display: flex;
  font-family: ${props => props.theme.fonts.secondary};
  text-decoration: none; 
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.colors.primaryDarkText};
  padding: 8px 8px;
  border-radius: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover:not(.active),
    &:focus-visible:not(.active) {
    color: ${props => props.theme.colors.primaryDarkText};
    background-color: ${props => props.theme.colors.normalDark};
  }
  &.active {
     color: ${props => props.theme.colors.normalDark};
    font-weight: 700;
  }
`;

export const Span = styled.span`
display: flex; 
align-items: center;
height: 30px; 
`;

export const AddIcon = styled(AiOutlineUserAdd)`
font-size: 20px;
margin-left: 3px; 
`;

export const ContactsIcon = styled(RiContactsBookLine)`
font-size: 20px;
margin-left: 3px; 
`;

export const FavoriteIcons = styled(FiHeart)`
font-size: 18px;
margin-left: 3px; 
`;

export const ThemeTogglerBox = styled.div`
position: absolute;
top: 240px;
right: 105px;
z-index: 1;
cursor: pointer;
  @media screen and (min-width: 480px) {
    top: 255px;
  }
`;

export const LogoutIcon = styled(FiLogOut)`
padding: 0;
font-size: 20px;
margin-left: 5px;
`;

export const Button = styled.button`
  display: flex; 
  align-items: center; 
  border: none;
  text-align: center;
  padding: 6px 20px;
  margin-bottom: 5px;
  margin-top:8px;
  font-size: 17px;
  line-height: 27px;
  background: ${props => props.theme.colors.normalDark};
  color: white; 
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s ease;
  outline: none;
  cursor: pointer;
  box-shadow: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  &.active {
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`; 