import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-grow: 1;
flex-basis: 0;
flex-direction: column; 
align-items: flex-start;
padding: 30px; 
border-radius: 5px;
margin: 5px;
@media screen and (max-width: 1080px) {
  align-items: center;
  }
`;


export const Title = styled.h1`
text-align: center;
`;