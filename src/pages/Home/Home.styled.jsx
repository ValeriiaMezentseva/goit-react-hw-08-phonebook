import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #fff;

  &.active {
      color: #2c6cbb97
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
/* display: flex;
margin: 50px;
justify-content: space-between;
align-items: center;
padding: 80px;
flex-direction: row;
position: relative;
@media screen and (max-width: 1140px) {
    flex-direction: column-reverse;
    margin: 20px;
    padding: 40px;

  } */
`;

export const Wrapper = styled.div`
display: flex;
justify-content: baseline;
flex-direction: column-reverse;
align-items: center;
margin-top: 40px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    flex-direction: row-reverse;
  }
`; 

export const InfoBlock = styled.div`
  display: flex; 
  align-items: center;
  padding: 10px; 
  flex-direction: column; 
  justify-content: center; 
    @media screen and (min-width: 1200px) {
   margin-left: 40px;
  }
`


export const Title = styled.h1`
font-weight: 700;
font-size: 48;
line-height: 1.2;
color: #030134;
padding: 5px;
`;

export const Info = styled.h2`
font-size: 18px;
font-weight: 400;
padding: 0;
margin: 0;
color: #5b5a6b;
margin-bottom: 10px; 
`



export const Img = styled.img`
border: 5px solid #c8e8fd;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
border-top-right-radius: 45%;
border-top-left-radius: 50%;
border-bottom-right-radius: 50%;
border-bottom-left-radius: 50%;
  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 0;
    width: 240px; 
    height: 240px; 
  }
`;

export const ImgWrapper = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    padding: 0;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%; 
`

export const Button = styled.button`
border: 1px solid #02bfae;
color: #fff;
text-align: center;
padding: 10px 20px;
font-size: 17px;
font-weight: 700;
line-height: 27px;
background: #41bbd7;
border-radius: 4px;
box-shadow: rgba(46, 191, 240, 0.4) 5px 5px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
transition: background-color .2s ease;
 outline: none;
 cursor: pointer;
    margin-top: 10px;
:hover {
  box-shadow: #2c6cbb97 0 -25px 18px -14px inset,#79cfefb3 0 1px 2px;
  transform: scale(1.05);
}
`
