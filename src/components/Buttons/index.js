import React from "react";
import { ContainerButton } from "./styles";

const Button = ({ children, ...props}) => {
    return <ContainerButton {...props}>{children}</ContainerButton> 
    
}

export default Button