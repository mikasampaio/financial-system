import Styled from "styled-components";

export const Container = Styled.div `
    display: flex;
    flex-direction: column;
`

export const Label = Styled.label `
    margin-top: 15px;
    font-size: 18px;
    font-weight: 300;
    color: rgb(0, 0, 0, .8);
`

export const Input = Styled.input `
    border: none;
    border-radius: 3px;
    margin-top: 10px;
    height: 40px;
    padding: 0 20px;
    outline: none;
    color: rgb(0, 0, 0, .8);

    &:focus {
        border: 1px solid rgb(0, 0, 0, .5)
    }

`

export const Error = Styled.span `
    color: rgb(232, 63, 91, .9);
    font-size: 15px;
` 