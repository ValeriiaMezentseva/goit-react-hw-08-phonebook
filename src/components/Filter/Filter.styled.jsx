import styled from "@emotion/styled";
import { FiSearch } from 'react-icons/fi';

export const Icon = styled(FiSearch)`
font-size: 18px; 
margin: 0;
padding: 10px;
color: #5cc8bf;
align-items: center;
`

export const FilterWrapper = styled.div`
  text-align: start;
background: #fff;
border-radius: 8px;
box-shadow: 0 2px 0 0 #ebeffb; 
`;

export const InputWrapper = styled.div`
  display: flex;
align-items: center;
   @media screen and (max-width: 680px) {
width: 320px; 
  };
`

export const Input = styled.input`
font-size: 20px;
padding: 5px 10px;
margin-bottom: 10px;
margin-top: 10px;
margin-right: 10px;
border: 2px solid #ccc;
border-radius: 5px;
outline: none;
width: 320px; 
:focus {
    border-color: #4287f5;
  }
   @media screen and (max-width: 680px) {
width: 100%; 
  };
`;