import React from 'react'
import { Scene, Router, Stack, Actions, ActionConst } from 'react-native-router-flux'
import AuthLoading from '../src/components/login/AuthLoading'
import Login from '../src/components/login/Login'

const AppRouting = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="splash" component={AuthLoading} hideNavBar/>
                <Scene key="login" component={Login} hideNavBar/>

            </Stack>
        </Router>
    );
};

export default AppRouting;
