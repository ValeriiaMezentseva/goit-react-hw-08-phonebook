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
  margin-top: 20px;
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

export const Title = styled.h2`
padding: 10px;
display: flex;
align-items: flex-start;
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