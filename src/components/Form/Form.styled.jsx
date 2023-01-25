import styled from "@emotion/styled";
import { Field, ErrorMessage, Form } from 'formik';


export const FormWrapper = styled.div`
display: flex;
flex-direction: row;
text-align: center;
padding: 12px;
margin: 0;
/* margin-right: 30px; */
background: #fff;
border-radius: 8px;
box-shadow: 0 2px 0 0 #ebeffb; 
`;

export const FormStyled = styled(Form)`
display: flex;
width: 1000px;
justify-content: space-between;
@media screen and (max-width: 1080px) {
   width: 600px;
    flex-direction: column;
  align-items: center;
  }; 
@media screen and (max-width: 680px) {
   width: 320px;
   align-items: center;
  }; 

`
export const FormBox = styled.div`
 display: flex; 
 flex-direction: row;
 margin-left: 10px;
 text-align: start;
 width: 100%;
 @media screen and (max-width: 680px) {
   flex-direction: column;
   align-items: center;
  }; 
`;


export const Label = styled.label`
 display: flex;
 flex-direction: column;
 width: 100%;
 font-weight: 500;
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
font-size: 17px;
font-weight: 700;
line-height: 27px;
background: #41bbd7;
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

export const Title = styled.h1`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
color: #013370ec;
font-size: 20px;
margin: 0;
min-height: 30px;
border-radius: 8px 8px 0 0;
width: 1000px;
background-image: linear-gradient(-45deg,#a8e1ee,#c6eaec);
background-image: linear-gradient(-45deg,#d7eef1,rgba(182, 235, 249, 0.989));
@media screen and (max-width: 1080px) {
   width: 600px;
   margin: 0;
  }; 

 @media screen and (max-width: 680px) {
background-image: linear-gradient(-45deg,#41bbd7,#30ccd4);
background-image: linear-gradient(-45deg,#41bbd7,rgba(46, 191, 240, 0.4));
min-height: 50px;
width: 320px; 
align-items: center;
  };
`;

export const ButtonBox = styled.div`
display: flex;
justify-content: center;
height: 80px;
`