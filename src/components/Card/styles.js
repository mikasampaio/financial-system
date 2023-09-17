import Styled from "styled-components";

export const Container = Styled.div`
   width: 65%;
   height: 75%;
   background: ${(props) => props.color};

   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 10px;

   padding: 20px;
   border-radius: 4px;
`
export const Header = Styled.div`
   width: 100%;

   svg {
      color: ${(props) => props.color};
      width: 30px;
      height: 30px;
      font-weight: 400;
   }
`

export const H1 = Styled.h1`
   color: ${props => props.isColor ? '#FFFFFF' : 'rgb(0,0,0,.8)'};
   font-size: 18px;
   font-weight: 300;

   display: flex;
   align-items: center;
   justify-content: space-between;
   
`

export const Value = Styled.span`
   color: ${props => props.isColor ? '#FFFFFF' : 'rgb(0,0,0,.8)'};
   font-weight: 400;
   font-size: 30px;
   display: flex;
   justify-content: center;

`
