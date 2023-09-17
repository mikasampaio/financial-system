import React from "react";
import { Container } from "./styles";
import CardItens from "../Card";
import { PiCurrencyDollarSimple } from "react-icons/pi"
import {BsArrowUpCircle, BsArrowDownCircle} from "react-icons/bs"

const Card = () => {
    return (
        <Container>
            <CardItens color="#FFFFFF">Entradas <BsArrowUpCircle color="#5FBD7F"/> </CardItens>
            <CardItens color="#FFFFFF">Saídas <BsArrowDownCircle color="#E83F5B"/> </CardItens>
            <CardItens isColor={true} color="#5FBD7F">Saldo Atual <PiCurrencyDollarSimple color="#FFFFFF"/> </CardItens>
        </Container>
    )
}

export default Card