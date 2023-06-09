import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { getDevices } from "../http/basketAPI";
import { Card, Col, Image, Row } from "react-bootstrap";
import { DEVICE_ROUTE } from "../utils/consts";
import star_small from "../assets/star_small.png";
import { fetchOneBrand } from "../http/deviceAPI";
import DeviceItem from "../components/DeviceItem";

const Basket = observer(() => {

    const { basket } = useContext(Context);
    const [devices, setDevices] = useState([]);
    const [brand, setBrand] = useState('');

    useEffect(() => {
        getDevices().then(data => setDevices(data));
    }, []);


    return (
        <Col md={9}>
        <Row className={"d-flex"}  >
            {devices.length ?
                devices.map((device, index) => (
                <DeviceItem  key={device.id} device={device.device} itemId={device.id} />
            )) : <h1 className="d-flex justify-content-center" >Корзина пуста</h1>}
        </Row>
        </Col>
    );
});

export default Basket;
