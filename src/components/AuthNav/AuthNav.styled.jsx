import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
font-family: ${props => props.theme.fonts.secondary};
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryLightText};
  &.active {
    font-weight: 700;
    > button {
     box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }

`;

export const Button = styled.button`
  border: none;
  text-align: center;
  padding: 6px 20px;
   margin-bottom: 5px;
  margin-right: 10px;
  font-size: 17px;
  line-height: 27px;
  background: ${props => props.theme.colors.normalDark};
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

  @media screen and (min-width: 679px) {
    padding: 10px 20px;
    margin-bottom: 0;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
   flex-direction: column;

  @media screen and (min-width: 679px) {
    flex-direction: row;
     padding: 5px;
  }
`;

export const ThemeTogglerBox = styled.div`
  position: absolute;
   top: 100px;
  right: 30px;
  z-index: 1;
  cursor: pointer;
      @media screen and (min-width: 480px) {
       top: 25px;
  right: 140px;
  }
    @media screen and (min-width: 679px) {
      right: 240px;
  }
`;