import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none; 
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 18px;
  color: #030134;
  padding: 8px 8px;
  border-radius: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #1e1e1e;
    background-color: rgba(125, 187, 192, 0.5);
  }
  &.active {
    color: #fefefe;
    background-color:#5cc8bf8a;
  }
/* display: inline-block;
text-decoration: none;
font-weight: 700;
margin-left: 5px;
color: #030134;
font-size: 21px; */
/* &.active {
      color:#5cc8bff9;
  } */
    @media screen and (max-width: 480px) {
      background-color: transparent; 
      border: none; 
  };
`;

export const Span = styled.span`
  @media screen and (max-width: 480px) {
display: none; 
  };

`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  /* gap: 8px; */
`;


export const Img = styled.img`
padding: 0;
margin: 0;
width: 40px;
@media screen and (max-width: 480px) {
      width: 36px;
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
`