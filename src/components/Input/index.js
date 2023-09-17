import React from "react";
import { ErrorMessage } from "formik";
import { Container, Input as ContainerInputs, Label, Error  } from "./styles";

const Input = ({ name, label, children, ...props}) => {
    return (
        <Container>
            <Label>
                {label || name}
            </Label>
            <ContainerInputs name={name} {...props}>{children}</ContainerInputs>
            <ErrorMessage name={name} component={Error}/>
        </Container>
    )

}

export default Input