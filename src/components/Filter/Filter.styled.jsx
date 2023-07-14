import styled from "@emotion/styled";
import { FiSearch } from 'react-icons/fi';

export const Icon = styled(FiSearch)`
position: absolute;
top: 15px;
left: 10px;
font-size: 20px; 
margin: 0;
padding: 10px;
color: ${props => props.theme.colors.normalDark};
align-items: center;
`;

export const FilterWrapper = styled.div`
position: relative;
text-align: start;
background: transparent;
`;


export const Input = styled.input`
width: 320px;
height: 45px;
font-size: 20px;
padding-left: 37px;
margin-top: 10px;
margin-left: 10px;
color: ${props => props.theme.colors.primaryDarkText}; 
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
background: transparent; 
border: 1px solid #ccc;
border-radius: 8px;
outline: none;
:focus {
    border-color: ${props => props.theme.colors.orangeAccent};
  }

    @media screen and (max-width: 400px) {
  width: 90%;
  font-size: 18px;
  }
`;
