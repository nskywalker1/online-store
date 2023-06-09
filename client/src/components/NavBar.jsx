import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import basketIcon from '../assets/basketIcon.png'

const NavBar = observer(() => {

    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>Comfy</Navbar.Brand>
                <Nav className="ml-auto"  >
                    {user.isAuth
                        ?
                        <Nav className="ml-auto"  >
                            {user.user.role === 'ADMIN' && <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)} >Адмін панель</Button>}
                            <Image style={{cursor:"pointer"}} width={40} height={40} src={basketIcon} onClick={() => history(BASKET_ROUTE)}  />
                            <Button variant={"outline-light"} onClick={() => logOut()} style={{marginLeft: 10}} >Вийти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto"  >
                            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)} >Авторизація</Button>
                        </Nav>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;