import React from "react";
import { Container, Header, H1, Value } from "./styles";

const CardItens = ({ color, children, ...props }) => {
    return (
        <Container color={color} >
            <Header>
                <H1 color={color} {...props}>{children}</H1>
            </Header>
            <Value {...props} >2045</Value>
        </Container>
    )
}
export default CardItens