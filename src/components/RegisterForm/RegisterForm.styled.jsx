import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 30px;
`;

export const Form = styled.form`
width: 480px;
padding: 12px;
margin: 0;
background: #fff;
border-radius: 8px;
box-shadow: 0 2px 0 0 #ebeffb;
@media screen and (max-width: 680px) {
   width: 320px;
  }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column; 
    margin-bottom: 16px;
`; 


export const Title = styled.h1`
min-height: 70px;
padding: 10px;
background-image: linear-gradient(-45deg,#41bbd7,#30ccd4);
background-image: linear-gradient(-45deg,#41bbd7,rgba(46, 191, 240, 0.4));
border-radius: 8px 8px 0 0;
display: flex;
flex-direction: column;
justify-content: center;
color: #031c69;
font-size: 25px;
align-items: center;
margin: 0;
width: 480px;
@media screen and (max-width: 680px) {
   width: 320px;
  }
`;

export const InfoRegister = styled.p`
margin: 0 0 20px;
background: #fcfdfe;
padding: 15px 20px;
color: #747e8d;
border: 1px solid #e3e4f1;
border-radius: 4px;
`
export const Input = styled.input`
background: #fff;
border: 1px solid #e3e4f1;
border-radius: 4px;
padding: 10px 15px;
outline: none;
font-size: 17px;
line-height: 27px;
color: #030134;
margin-top: 10px;
`; 

export const Button = styled.button`
border: 1px solid #02bfae;
text-align: center;
margin-top: 15px;
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
color: white;
text-overflow: ellipsis;
transition: background-color .2s ease;
 outline: none;
 cursor: pointer;
    margin-bottom: 10px;
:hover {
  box-shadow: #2c6cbb97 0 -25px 18px -14px inset,#79cfefb3 0 1px 2px;
  transform: scale(1.05);
}
  @media screen and (max-width: 680px) {
  display: flex;
  flex-direction: column; 
  } 
`; 
export const CheckboxLabel = styled.span`
    margin-left: 5px; 
`
