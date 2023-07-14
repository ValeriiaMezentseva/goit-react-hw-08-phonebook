import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media screen and (min-width: 480px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 1079px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
font-family: ${props => props.theme.fonts.primary};
font-size: 23px;
font-weight: 500;
text-align: center;
min-height: 70px;
padding: 10px;
background-image: linear-gradient(-45deg,${props => props.theme.colors.lightBlue}, ${props => props.theme.colors.normalDark});
border-radius: 8px 8px 0 0;
display: flex;
flex-direction: column;
justify-content: center;
color: ${props => props.theme.colors.primaryDarkText};
align-items: center;
margin: 0;
width: 228px;
box-shadow: ${props => props.theme.colors.primaryDarkText} ${props => props.theme.colors.normalDark} 0px -2px 6px 0px inset;
   @media screen and (min-width: 350px) {
   width: 303px;
  }

    @media screen and (min-width: 500px) {
   width: 453px;
   font-size: 25px;
  }
@media screen and (min-width: 768px) {
   width: 483px;
  }
`;

export const Form = styled.form`
  width: 225px;
  padding: 12px;
  margin: 0;
  background: transparent;
  border-radius: 0 0 8px 8px;
  box-shadow: ${props => props.theme.colors.primaryDarkText} 0px 10px 70px -40px,
    ${props => props.theme.colors.normalDark} 0px -2px 6px 0px inset;

  @media screen and (min-width: 350px) {
    width: 300px;
  }

  @media screen and (min-width: 500px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`;

export const InfoRegister = styled.p`
font-family: ${props => props.theme.fonts.primary};
margin: 0 0 10px;
line-height: 23px;
background: transparent;
padding: 10px;
color: ${props => props.theme.colors.primaryDarkText};
`;

export const Label = styled.label`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.primaryDarkText};
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`;


export const Input = styled.input`
  font-family: ${props => props.theme.fonts.primary};
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border: 1px solid  ${props => props.theme.colors.quaternaryDarkText};
  border-radius: 10px;
  height: 40px;
  padding: 10px 15px;
  outline: none;
  font-size: 17px;
  line-height: 27px;
  color: ${props => props.theme.colors.primaryDarkText};
  margin-top: 10px;

  &:focus {
    border-color: ${props => props.theme.colors.primaryDarkText};
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.primary};
  border: none;
  text-align: center;
  margin-top: 15px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 17px;
  font-weight: 500;
  line-height: 27px;
  background-color: ${props => props.theme.colors.normalDark};
  border-radius: 4px;
  box-shadow: ${props => props.theme.colors.lightBlue} 2px 2px;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  text-overflow: ellipsis;
  transition: background-color 0.2s ease;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    box-shadow: #2c6cbb97 0 -25px 18px -14px inset, #79cfefb3 0 1px 2px;
    transform: scale(1.05);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const CheckboxLabel = styled.span`
  color: ${props => props.theme.colors.primaryDarkText};
  font-family: ${props => props.theme.fonts.primary};
   flex: 1;
`;

export const Checkbox = styled.input`
  display: flex;
  position: relative;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  border: 2px solid ${props => props.theme.colors.primaryDarkText};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:checked {
    background-color: ${props => props.theme.colors.normalDark};
    border-color: ${props => props.theme.colors.normalDark};
  }

  &:checked::before {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${props => props.theme.colors.primaryDarkText};
    opacity: 1;
    transition: opacity 0.2s ease;
  }
`;
