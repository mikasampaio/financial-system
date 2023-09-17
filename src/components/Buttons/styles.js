import Styled from "styled-components"

export const ContainerButton = Styled.div `
    border: ${props => props.isColor ? '1px solid #5FBD7F': '1px solid rgb(232, 63, 91, .5)'};
    background: ${props => props.isColor ? '#5FBD7F' : '#transparent'};
    width: 100px;
    height: 40px;
    border-radius: 3px;
    color: ${props => props.isColor ? '#FFFFFF' : 'rgb(232 63 91)'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-size: 15px;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
    `