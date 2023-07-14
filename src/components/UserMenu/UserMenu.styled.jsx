import styled from "@emotion/styled";
import { RxAvatar } from 'react-icons/rx';
import { FiLogOut } from 'react-icons/fi';



export const Wrapper = styled.div`
display: flex;
flex-direction: row; 
align-items: center;
margin-right: 10px;
 @media screen and (min-width: 680px) {
gap: 12px;
  };
`; 

export const UserName = styled.div`
font-size: 20px;
display: flex;
margin-top: 5px;
margin-bottom: 15px; 
color: ${props => props.theme.colors.primaryDarkText};
align-items: center;
 @media screen and (min-width: 680px) {
margin: 0;
  };
`; 

export const ThemeTogglerBox = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  z-index: 1;
  cursor: pointer;
  
  @media screen and (max-width: 679px) {
    display: none; 
  }
`;

export const Icon = styled(RxAvatar)`
padding: 0;
font-size: 26px;
fill: #41bbd7;
margin-right: 3px;
`; 

export const LogoutIcon = styled(FiLogOut)`
  padding: 0;
font-size: 20px;
margin-left: 5px;
`


export const Button = styled.button`
display: flex; 
align-items: center; 
  border: none;
  text-align: center;
  padding: 6px 20px;
   margin-bottom: 5px;
  margin-right: 10px;
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

  @media screen and (max-width: 679px) {
   display:none; 
  }
`; 

export const MenuBtn = styled.button`
background: none; 
border: none; 
color:  ${props => props.theme.colors.primaryDarkText};
font-size: 30px; 
cursor: pointer;

  @media screen and (min-width: 680px) {
   display:none; 
  }
`;