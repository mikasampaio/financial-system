import Styled from "styled-components";

export const  customStyles  =  { 
    content : { 
      top : '50%' , 
      left : '50%' , 
      right : 'auto' , 
      bottom : 'auto' , 
      marginRight : '-50%' , 
      transform : 'translate(-50%, -50%)' , 

      maxWidth: '450px',
      width: '85%',
      height: '50%',
      border: 'none',
      background: '#F0F2F5',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    } , 
    overlay : {
        backgroundColor: 'rgb(0, 0, 0, .6)',
    }
  } ;

export const Buttons = Styled.div `
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 15px;
`

export const Button = Styled.button `
    border: none;
    color: #008D7F; //#126F66
    background: transparent;
    font-size: 50px;
    cursor: pointer;
    transition: .4s;

    &:hover{
      color: #5FBD7F;
    }
`