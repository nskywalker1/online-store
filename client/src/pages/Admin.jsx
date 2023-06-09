import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {

    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column" >
            <Button
                onClick={() => setTypeVisible(true)}
                variant={"outline-dark"}
                className="mt-3"
            >
                Добавити тип
            </Button>
            <Button
                onClick={() => setBrandVisible(true)}
                variant={"outline-dark"}
                className="mt-3"
            >
                Добавити бренд
            </Button>
            <Button
                onClick={() => setDeviceVisible(true)}
                variant={"outline-dark"}
                className="mt-3"
            >
                Добавити девайс
            </Button>
            <CreateBrand  show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateType   show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    );
};

export default Admin;