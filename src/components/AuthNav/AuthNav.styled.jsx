import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #fff;

  &.active {
      color: #013370ec;
  }
`;

export const Button = styled.button`
border: 1px solid #02bfae;
text-align: center;
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
text-overflow: ellipsis;
transition: background-color .2s ease;
 outline: none;
 cursor: pointer;
:hover {
  box-shadow: #2c6cbb97 0 -25px 18px -14px inset,#79cfefb3 0 1px 2px;
  transform: scale(1.05);
}
  @media screen and (max-width: 680px) {
     padding: 6px 20px;
     margin-bottom: 5px;
  };
`; 

export const BtnContainer = styled.div`
  display: flex;
  padding: 5px;
    @media screen and (max-width: 680px) {
     flex-direction: column;
  };
`
