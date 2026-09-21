import React from 'react'
import { Provider } from 'react-redux'
import LoginProvider from 'contexts/LoginProvider'
import App from './App'

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <LoginProvider>
                <App />
            </LoginProvider>
        </Provider>
    )
}
export default Root
