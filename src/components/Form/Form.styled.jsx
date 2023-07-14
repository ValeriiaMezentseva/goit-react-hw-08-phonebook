import styled from "@emotion/styled";
import { Field, ErrorMessage, Form } from 'formik';

export const FormWrapper = styled.div`
display: flex; 
flex-direction: column;
 width: calc( 100% - 30px);
 max-width: 1200px;
text-align: center;
align-items: center;
margin-top: 45px; 
margin-bottom: 30px;
background: rgba(255, 255, 255, 0.4);
border-radius: 30px;
padding: 75px 0; 

    @media screen and (min-width: 1016px) {
   flex-direction: row;
  } 
`;

export const Title = styled.h2`
margin: 0;
padding: 0;
font-weight: 600;
 color: ${props => props.theme.colors.primaryDarkText};
font-family: ${props => props.theme.fonts.primary};
font-size: 26px;
`
export const FormContainer = styled.div`
    margin-left: 35px;
    margin-right: 35px;
    width: 50%;
   @media screen and (max-width: 1015px) {
  width: 80%; 
  };
`;

export const ImageContainer = styled.div`
flex: 1;
`;

export const FormStyled = styled(Form)`
gap: 20px;
width: 100%;
margin: 0 auto;
background-color: transparent;
`;

export const FormBox = styled.div`
 display: flex; 
 flex-direction: column;
 margin-left: 10px;
 margin-top: 18px;
 margin-bottom: 10px;
 text-align: start;
`;

export const Image = styled.img`
width: 340px;
background-color: transparent;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
    @media screen and (max-width: 479px) {
   width: 190px;
  }
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
margin-right: 10px;
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

export const FormButton = styled.button`
display: flex; 
align-items: flex-start;
  font-family: ${props => props.theme.fonts.primary};
  border: none;
  padding: 10px 20px;
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
  margin-bottom: 10px;

  &:hover {
    box-shadow: ${props => props.theme.colors.normalDark} 0 -25px 18px -14px inset, #79cfefb3 0 1px 2px;
    transform: scale(1.05);
  }
`;


export const ButtonBox = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 10px;
margin-top: 30px;
`;