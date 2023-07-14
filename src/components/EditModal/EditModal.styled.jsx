import styled from "@emotion/styled";
import { Field, ErrorMessage, Form } from 'formik';

export const FormStyled = styled(Form)`
gap: 20px;
width: 100%;
margin: 0 auto;
background-color: transparent;
text-align: center;
`; 

export const Title = styled.h2`
margin: 0;
padding: 0;
text-align: center;
font-weight: 600;
 color: ${props => props.theme.colors.primaryDarkText};
font-family: ${props => props.theme.fonts.primary};
font-size: 22px;
      @media screen and (min-width: 380px) {
      font-size: 26px;
  }
`;

export const FormBox = styled.div`
 display: flex; 
 flex-direction: column;
 margin-top: 18px;
 margin-bottom: 10px;
 text-align: start;
`; 

export const Label = styled.label`
font-family: ${props => props.theme.fonts.primary};
 display: flex;
 flex-direction: column;
 font-weight: 500;
 color: ${props => props.theme.colors.primaryDarkText};
      @media screen and (min-width: 768px) {
      font-size: 20px;
  }
 :not(:last-child) {
    margin-bottom: 20px;

  }
`;

export const Input = styled(Field)`
font-family: ${props => props.theme.fonts.primary};
font-size: 20px;
padding: 10px 15px;
margin-top: 5px;
 background: transparent;
  color: ${props => props.theme.colors.primaryDarkText};
border: 2px solid #ccc;
border-radius: 5px;
outline: none;
@media screen and (min-width: 1016px) {
  padding: 15px 20px;
  }
:focus {
    border-color: ${props => props.theme.colors.normalDark};
    transform: scale(1.05);
  }
    &:hover {
    border-color: ${props => props.theme.colors.normalDark};
    
  } 
`;

export const Error = styled(ErrorMessage)`
margin-top: 5px;
font-size: 14px;
color: red;
`; 

export const Button = styled.button`
  font-family: ${props => props.theme.fonts.primary};
  border: none;
text-align: center;
  margin-left: 10px; 
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.normalDark};
  border-radius: 4px;
  box-shadow: ${props => props.theme.colors.lightBlue} 2px 2px;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  text-overflow: ellipsis;
  transition: background-color 0.2s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.theme.colors.normalDark} 0 -25px 18px -14px inset, #79cfefb3 0 1px 2px;
    transform: scale(1.05);
  }
`; 


