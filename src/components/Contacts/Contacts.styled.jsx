import styled from "@emotion/styled";
import { FaUserCircle } from 'react-icons/fa';



export const UserIcon = styled(FaUserCircle)`
padding: 3px;
border: 1px solid black;
border-radius: 50%;
margin-right: 10px;
fill: #5cc8bffb;
font-size: 20px;
`

export const ItemUser = styled.li`
display: flex;
justify-content: space-between;
width: 100%; 
align-items: center;
:not(:last-child) {
    margin-bottom: 20px;
    }
    :hover {
    color: #4287f5; 
    border-color: #4287f5;
  }
`

export const ContactList = styled.ul` 
padding: 15px;
align-items: start;
 width: 100%;
 border-radius: 8px;
 background-color: white; 
 margin: 0;
     @media screen and (max-width: 680px) {
        display: grid;
        justify-content: center; 


  };
`

export const ContactsButton = styled.button`
width: 46px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #242323;
  font-size: 36px;
  border-radius: 5px;
  border: 2px solid #5cc8bf8a;
  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;
  :hover {
    color: red;
    border-color: red;
  }
     @media screen and (max-width: 680px) {
width: 42px; 
height: 42px; 
justify-content: space-between;
  };
`;

export const ContactsTitle = styled.h2`
 padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
color: #013370ec;
font-size: 20px;
margin: 0;
min-height: 30px;
border-radius: 8px 8px 0 0;
width: 1010px;
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


export const ContactsContainer = styled.div`
display: flex;
flex-direction: column;
width: 1000px; 
margin-top: 30px;
@media screen and (max-width: 1080px) {
   width: 600px;
  align-items: center;
  }; 
@media screen and (max-width: 680px) {
   width: 320px;
   align-items: center;
  }; 
`;

export const ContactLabel = styled.div`
  display: flex;
  padding: 10px;
  width: 100%; 
    text-align: start; 
  justify-content: flex-start;
  align-items: center;
   border-radius: 5px;
    border: 2px solid #5cc8bf8a;;
    height: 30px;
    margin-right: 10px;
`; 

export const NameText = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-around;
   align-items: flex-start; 
   border-radius: 10px;
   margin-bottom: 5px;
      background-color: #5cc8bf8a; 
`

export const TextSpan = styled.span`
  font-weight: 700;
  align-items: flex-start;

`