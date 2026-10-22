import React from 'react'
import { Provider } from 'react-redux'
import LoginProvider from 'contexts/LoginProvider'
import DashboardProvider from 'contexts/DashboardProvider'
import App from './App'

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <LoginProvider>
                <DashboardProvider><App /></DashboardProvider>
            </LoginProvider>
        </Provider>
    )
}
export default Root
