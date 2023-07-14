import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-family: ${props => props.theme.fonts.secondary};
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryLightText};

  &.active {
    font-weight: 700;
    > button {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 10px auto;

  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InfoBlock = styled.div`
  flex-grow: 1;
  padding: 10px;
  margin-top: 40px;

  @media screen and (min-width: 1000px) {
    margin-top: 0;
    margin-left: 40px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  color: ${props => props.theme.colors.primaryDarkText};
  padding: 5px;
`;

export const Info = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 24px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.tertiaryDarkText};
  margin-bottom: 20px;
`;

export const ImgWrapper = styled.div`
  margin-bottom: 30px;
  padding: 0;

  @media screen and (min-width: 1000px) {
    margin-bottom: 0;
    margin-left: 40px;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;

  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 240px;
    height: auto;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 17px;
  line-height: 27px;
  background: ${props => props.theme.colors.normalDark};
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

  @media screen and (max-width: 680px) {
    padding: 6px 20px;
    margin-bottom: 5px;
  }
`;
