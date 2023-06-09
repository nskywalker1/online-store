import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{
                        cursor: 'pointer',
                        backgroundColor: type.id === device.selectedType.id ? "darkgray" : 'transparent',
                        color: type.id === device.selectedType.id ? 'white' : 'black'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;