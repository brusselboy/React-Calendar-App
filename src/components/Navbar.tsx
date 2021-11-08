import React, {FC} from 'react';
import {Col, Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import { RouteNames } from '../router';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const Navbar: FC = () => {
    const router = useHistory()
    const dispatch = useDispatch()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {Header} = Layout;

    const exit = ()  => {
        dispatch(AuthActionCreators.logout())
    }

    return (
        <Layout>
            <Header>
                <Row justify={"end"}>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => exit()} key={1}>Sign out</Menu.Item>
                        </Menu>
                    </>
                    :
                    <>
                    <Col span={1}>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={2}>Login</Menu.Item>
                        </Menu>
                    </Col>
                    </>
                }

                </Row>
            </Header>
        </Layout>
    );
};

export default Navbar;

/*
* <div style={{color: 'white'}}>BRUSSELBOY</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item key={1} onClick={() => router.push(RouteNames.LOGIN)}>Login</Menu.Item>
                    </Menu>
*
* */