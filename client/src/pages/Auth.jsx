import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Nav, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className={"d-flex justify-content-center align-items-center "}
            style={{height: window.innerHeight - 50}}
        >
            <Card style={{width: 600}} className={"p-5"} >
                <h2 className={"m-auto"} >{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className={"d-flex flex-column"} >
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Ваш email..."}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className={"mt-3"}
                        type="password"
                        placeholder={"Ваш пароль..."}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row className={"mt-3 d-flex justify-content-between "}>
                        {isLogin
                            ?
                            <div>
                            Немає аккаунт? <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
                            </div>
                            :
                            <div>
                                Є аккаунт? <NavLink to={LOGIN_ROUTE}>Увійди!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"} onClick={click} >{isLogin ? 'Увійти' : 'Зареєструватися'}</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;