import styled from "@emotion/styled";

export const Section = styled.div`
 padding: 36px 0;
/* display: flex;
flex-grow: 1;
flex-basis: 0;
flex-direction: column; 
align-items: flex-start;
padding: 30px; 
border-radius: 5px;
margin: 5px;
@media screen and (max-width: 1080px) {
  align-items: center;
  } */
`;

export const ContactsContainer = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
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
background-image: linear-gradient(-45deg,#a8e1ee,#c6eaec);
background-image: linear-gradient(-45deg,#d7eef1,rgba(182, 235, 249, 0.989));
@media screen and (max-width: 1080px) {
   margin: 0;
  }; 
   @media screen and (max-width: 680px) {
min-height: 50px;
align-items: center;
  };
`;

export const ContactsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
/* padding: 20px; */
margin: 0 auto;
width: 99%;
background-color: #fefefe;
border-radius: 15px;
@media screen and (min-width: 768px) {
  width: 600px;
  }
`; 

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: start;
`

export const FormButton = styled.button`
border: 1px solid #02bfae;
text-align: center;
padding: 10px 20px;
margin-left: 5px;
font-size: 17px;
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
