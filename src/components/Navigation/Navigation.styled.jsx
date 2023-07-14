import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { RiContactsBookLine } from 'react-icons/ri'; 
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';


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

    @media screen and (max-width: 480px) {
      background-color: transparent; 
      border: none; 
  };
`;

export const Span = styled.span`
display: flex; 
align-items: center;
height: 30px; 
  @media screen and (max-width: 679px) {
display: none; 
  };
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

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
`;


export const Img = styled.img`
padding: 0;
margin: 0;
width: 55px;
@media screen and (min-width: 480px) {
      width: 40px;
  };
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 680px) {
    padding: 5px;
  };
`;