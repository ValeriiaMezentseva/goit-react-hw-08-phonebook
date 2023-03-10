import styled from "@emotion/styled";
import { Field, ErrorMessage, Form } from 'formik';


export const FormWrapper = styled.div`
/* display: flex;
flex-direction: row; */
text-align: center;
padding: 12px;
margin: 0;
background: #fff;
border-radius: 8px;
box-shadow: 0 2px 0 0 #ebeffb; 
`;

export const FormStyled = styled(Form)`
display: flex;
flex-direction: column;
gap: 20px;
/* padding: 20px; */
margin: 0 auto;
width: 99%;
background-color: #fefefe;
box-shadow: 0px 8px 12px -4px rgba(50, 88, 130, 0.32);
border-radius: 15px;
    /* @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
    @media screen and (min-width: 768px) {
    width: 560px;
  } */
`;

export const FormBox = styled.div`
 display: flex; 
 flex-direction: column;
 margin-left: 10px;
 margin-top: 18px;
 text-align: start;
 @media screen and (max-width: 768px) {
   align-items: center;
  }; 
`;


export const Label = styled.label`
 display: flex;
 flex-direction: column;
 width: 100%;
 font-weight: 500;
      @media screen and (min-width: 768px) {
      font-size: 22px;
  }
 :not(:last-child) {
    margin-bottom: 20px;

  }
`;
export const Input = styled(Field)`
font-size: 20px;
padding: 5px 10px;
margin-top: 5px;
margin-right: 10px;
border: 2px solid #ccc;
border-radius: 5px;
outline: none;
@media screen and (min-width: 768px) {
  padding: 10px 15px;
  }
:focus {
    border-color: #4287f5;
  }
`;

export const Error = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;

export const FormButton = styled.button`
border: 1px solid #02bfae;
text-align: center;
padding: 10px 20px;
margin: 15px; 
font-size: 18px;
font-weight: 700;
line-height: 27px;
background: #5cc8bff9; 
border-radius: 4px;
box-shadow: rgba(46, 191, 240, 0.4) 2px 2px;
white-space: nowrap;
overflow: hidden;
color: white;
text-overflow: ellipsis;
transition: background-color .2s ease;
 outline: none;
 cursor: pointer;
:hover {
  box-shadow: #2c6cbb97 0 -25px 18px -14px inset,#79cfefb3 0 1px 2px;
  transform: scale(1.05);
}
:not(:last-child) {
    margin-right: 10px;
  }
`;


export const ButtonBox = styled.div`
display: flex;
justify-content: center;
height: 80px;
`