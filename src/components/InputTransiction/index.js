import React from "react";
import { ContainerActive as Container, Table, Header, H1, List } from "./styles";

const Finance = () => {
    const transiction = [
        { id: Math.random(), data: "14/01/2023", description: "Despesas", value: 3043 },
        { id: Math.random(), data: "14/01/2023", description: "Contas de casa", value: 452 },
        { id: Math.random(), data: "14/01/2023", description: "Aluguel", value: 1200 }
    ]
    return (
        <Container>
            <Table>
                <Header>
                    <H1>Data</H1>
                    <H1>Descrição</H1>
                    <H1>Valor</H1>

                </Header>
                <tr>
                    {transiction.map((f) => (
                        <List key={f.id}>
                            <p>{f.data}</p>
                            <p>{f.description}</p>
                            <p>{f.value}</p>
                        </List>
                    ))}
                </tr>

            </Table>
        </Container>
    )
}

export default Finance