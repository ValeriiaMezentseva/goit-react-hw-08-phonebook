import styled from "@emotion/styled";

export const FooterBox = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: ${props => props.theme.colors.primaryDarkText};;
  
`; 

export const FooterText = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   height: 30px;
   padding: 10px 10px; 
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