import styled from "@emotion/styled"; 

export const Section = styled.div`
  padding: 0;
  width: 100%; 
`;

export const ContactsTitle = styled.h2`
 text-align: center;
 color:  ${props => props.theme.colors.primaryDarkText};
font-size: 24px;
margin: 0;
  @media screen and (min-width: 480px) {
font-size: 28px; 
  }
`;

export const ContactsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
margin: 0 auto;
background-color: transparent;
border-radius: 15px;
`; 

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 480px) {
    justify-content: start;
  }
`

export const FormButton = styled.button`
 border: none;
  text-align: center;
  padding: 10px 20px;
  margin-left: 0;
   margin-top: 10px;
  font-size: 17px;
  line-height: 27px;
  background: ${props => props.theme.colors.normalDark};
  color: white; 
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s ease;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.colors.primaryDarkText} 0px 12px 30px -12px;
  }

  &.active {
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

    @media screen and (min-width: 480px) {
       margin-top: 0;
      margin-left: 10px;
  }
`;



