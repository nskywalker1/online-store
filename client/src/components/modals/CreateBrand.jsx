import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {

    const [brand, setBrand] = useState('')

    const addBrand = () => {
        createBrand({name: brand}).then(data => {
            setBrand('')
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
                    Добавити новий бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введіть назву бренду..."}
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"}  onClick={addBrand} >Добавити</Button>
                <Button variant={"outline-danger"} onClick={onHide} >Назад</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;