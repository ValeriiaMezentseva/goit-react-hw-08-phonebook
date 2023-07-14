import styled from "@emotion/styled";

export const Container = styled.div`
 min-height: 100vh;
 position: relative;
 padding: 10px;
 align-items: center;
 align-content: center;
 background-image: url(${props => props.theme.images.background});
 background-repeat: repeat;
 background-size: cover;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;