import React, { useState, useEffect } from 'react'
import Spinner from 'components/Spinner'
export const LoginContext = React.createContext()

const LoginProvider = ({ children }) => {
    const [isLogin, toggleLogin] = useState(null)

    const defaultValue = {
        isLogin,
        toggleLogin
    }

    useEffect(() => {
        fetch('/invoice-api/is-login', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data }) => {
                toggleLogin(data.isLogin)
            })
            .catch(console.error)
    }, [])

    return (
        <LoginContext.Provider value={defaultValue}>
            {isLogin === null ? (
                <div className="d-flex justify-content-center align-items-center fill-parent">
                    <Spinner size={20} color="#fff" />
                </div>
            ) : (
                children
            )}
        </LoginContext.Provider>
    )
}

export default LoginProvider
