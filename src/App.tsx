import React, {FC} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "./store/reducers/auth/action-creators";
import {IUser} from "./models/IUser";

const App: FC = () => {
    const dispatch = useDispatch()

    if (localStorage.getItem('auth')) {
        dispatch(AuthActionCreators.setUser({username: localStorage.getItem('username' || '')} as IUser))
        dispatch(AuthActionCreators.setAuth(true))
    }

  return (
    <Layout>
        <Navbar/>
        <Layout.Content>
            <AppRouter />
        </Layout.Content>
    </Layout>
  );
}

export default App;
