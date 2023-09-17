import Styled from 'styled-components'

export const ContainerActive = Styled.div `
    margin: 0 auto;
    width: 85%;

`

export const Table = Styled.table `
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const Header = Styled.tr `
    display: flex;
    background: #008D7F;
    justify-content: space-around;
    align-items: center;
    height: 50px;
`


export const H1 = Styled.th `
    font-size: 20px;
    font-weight: 300;   
    width: 50%;
    color: #FFFFFF;
`

export const List = Styled.td `
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 2px solid #F0F2F5;
    background: #FFFFFF;

    p{
        display: flex;
        justify-content: center;
        width: 50%;
        color: rgb(0,0,0, .8);
    }
`