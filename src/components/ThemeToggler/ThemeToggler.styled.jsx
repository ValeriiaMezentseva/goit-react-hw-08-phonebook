import styled from 'styled-components';


export const SwitchBody = styled.div`
  margin: 0;
  cursor: pointer;
`;

export const Input = styled.input`
  visibility: hidden;
  margin: 0;
  &:checked + label {
    transform: rotate(360deg); 
    background-color: black; 
    border-color: white;

    &:before {
      transform: translateX(33px); 
      background-color: #617ec2;
    }
  }
       @media screen and (min-width: 480px) {
      &:checked + label {
    transform: rotate(90deg);
      &:before {
      transform: translateX(33px);
    }
  }
}
`;

export const Switch = styled.label`
  display: flex;
  width: 61px;
  height: 28px;
  border: 2px solid;
  border-radius: 50px;
  position: relative;
  transition: transform 0.75s ease-in-out;
  transform-origin: 50% 50%;
  cursor: pointer;
  margin: 0;
  border-color: #8CBDB9;
  
  &:before {
    transition: transform 0.75s ease;
    transition-delay: 0.5s;
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #FFBB98; 
    border-radius: 50%;
    top: 4px;
    left: 4px;
  }
`;