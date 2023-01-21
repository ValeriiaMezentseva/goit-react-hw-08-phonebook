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
display: flex;
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

  }
`;


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
margin: 24px 0 40px;
padding: 5px;
color: #5b5a6b;
`



export const Img = styled.img`
border: 5px solid #c8e8fd;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
border-top-right-radius: 45%;
border-top-left-radius: 50%;
border-bottom-right-radius: 50%;
border-bottom-left-radius: 50%;
@media screen and (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

export const ImgWrapper = styled.div`
 width: 50%;
 height: 50%;
 padding-left: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
    padding: 0;
  }
`;

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
    margin-bottom: 10px;
:hover {
  box-shadow: #2c6cbb97 0 -25px 18px -14px inset,#79cfefb3 0 1px 2px;
  transform: scale(1.05);
}
`
