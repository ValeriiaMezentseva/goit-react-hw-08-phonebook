import styled from "@emotion/styled";

import noContact from '../../pictures/noContacts.png';



export const ContactList = styled.ul` 
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 5px;
`;

export const NoContactsBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`; 

export const NoContactsImg = styled.span`
 background-image: url(${noContact});
  background-size: contain;
  opacity: 0.30;
  border: none; 
  width: 160px;
  height: 160px; 
`;


export const NoContactsText = styled.p`
  color: ${props => props.theme.colors.primaryDarkText};
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  text-align: center; 
`; 