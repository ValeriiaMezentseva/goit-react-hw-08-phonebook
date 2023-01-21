import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
display: inline-block;
text-decoration: none;
font-weight: 700;
color: #8bcdf0;
font-size: 21px;
&.active {
    color: #030134;
  }
`;

export const NavWrapper = styled.header`
  height: 70px;
  padding-right: 10px;
  padding-left: 10px;
`;


export const Img = styled.img`
    margin-right: 10px;
    width: 44px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 10px;
`