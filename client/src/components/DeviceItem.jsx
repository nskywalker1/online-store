import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import star_small from '../assets/star_small.png'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {fetchBrands, fetchDevices, fetchOneBrand, fetchOneDevice, fetchTypes} from "../http/deviceAPI";
import {removeDevice} from "../http/basketAPI";

const DeviceItem = ({device, itemId}) => {

    const [brand, setBrand] = useState('')
    const location = useLocation()
    const isLogin = location.pathname === BASKET_ROUTE
    const history = useNavigate()

    useEffect(() => {
        fetchOneBrand(device.brandId).then(data => setBrand(data.name))
    }, [])

    const remove = () => {
        removeDevice(itemId).then(data => history(BASKET_ROUTE))
    }

    return (
        <Col md={3} style={{marginTop: 10}} onClick={() => history(DEVICE_ROUTE + '/' + device.id)} >
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}  >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className={" mt-1 d-flex justify-content-between"} >
                    <div className={"text-black-50"} >{brand}</div>
                    <div className={"d-flex"} >
                        <div>{device.rating}</div>
                        <Image width={10} height={10} src={star_small} />
                    </div>
                </div>
                <div>
                    <div>{device.name}</div>
                    {isLogin && <Button onClick={remove} variant={"outline-danger"}>видалити</Button>}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;