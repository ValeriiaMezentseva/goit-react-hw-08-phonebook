import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 10px;
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