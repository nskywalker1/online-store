import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {

    const [type, setType] = useState('')

    const addType = () => {
        createType({name: type}).then(data => {
            setType('')
            onHide()
        })
    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавити новий тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={type}
                        onChange={e => setType(e.target.value)}
                        placeholder={"Введіть назву типу..."}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addType} >Добавити</Button>
                <Button variant={"outline-danger"} onClick={onHide} >Назад</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;