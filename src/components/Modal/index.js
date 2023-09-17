import { React, useState } from "react";
import Modal from "react-modal"
import { Buttons, Button as OpenButton, CloseButton, SaveButton, customStyles } from "./styles";
import { Formik, Form, Field } from "formik";
import Button from "../Buttons";
import { FaCirclePlus } from "react-icons/fa6"
import Input from "../Input";
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    Descrição: Yup.string().required("Por favor, preencha o campo de descrição!"),
    Valor: Yup.string().required("Por favor, preencha o campo de valor!")
})


const Models = () => {
    const [Finance, setFinance] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [transiction, setTransiction] = useState([])

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function addNewTask() {
        console.log("Fui clicada")
    }

    return (
        <>
            <OpenButton onClick={openModal}>
                <FaCirclePlus />
            </OpenButton>
            <Modal

                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <Formik
                    initialValues={{
                        Descrição: '',
                        Valor: ''
                    }}
                    validationSchema={validationSchema}

                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field
                                name="Descrição"
                                placeholder="Descrição"
                                as={Input}
                            />

                            <Field
                                name="Valor"
                                type='number'
                                placeholder="R$0,00"
                                as={Input}
                            />
                        </Form>
                    )}</Formik>
                <Buttons>
                    <Button onClick={closeModal}>Cancelar</Button>
                    <Button isColor={true} onClick={addNewTask}>Salvar</Button>
                </Buttons>

            </Modal>

        </>
    )
}

export default Models