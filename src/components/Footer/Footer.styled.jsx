import styled from "@emotion/styled";

export const FooterBox = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-top: 20px;
  color: ${props => props.theme.colors.primaryDarkText};
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 10px;
  background-color: ${props => props.theme.colors.backgroundColor};

  span {
    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.01em;
    text-align: left;
    margin-right: 5px;
  }
`;