import React from 'react'
import { Scene, Router, Stack, Actions, ActionConst } from 'react-native-router-flux'
import AuthLoading from '../src/components/login/AuthLoading'
import Login from '../src/components/login/Login'
import Menu from '../src/components/menu/Menu';
import { handleOnBackPress } from "./Utils";

const AppRouting = () => {
    return (
        <Router backAndroidHandler={() => handleOnBackPress()} >
            <Scene hideNavBar>

                <Scene key="drawer"
                    drawer={true}
                    contentComponent={Menu} >
                    <Scene key="splash" component={AuthLoading} hideNavBar />
                </Scene>  
                <Scene key="login" component={Login} hideNavBar />
            </Scene>
        </Router>
    );
};

export default AppRouting;
git 