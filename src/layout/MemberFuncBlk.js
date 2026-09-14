import React, { useState, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { LoginContext } from 'contexts/LoginProvider'
import { LoadingContext } from 'contexts/LoadingProvider'
import useClickOutside from 'hooks/useClickOutside'

const MEMBER_FUNC_CONFIG = [
    { id: 1, label: '發票登錄', url: '/apply' },
    /* { id: 2, label: '載具條碼登錄', url: '/carrier' }, */
    { id: 3, label: '修改個人資訊', url: '/profile' },
    { id: 4, label: '修改密碼', url: '/change-password' }
]
const MemberFuncBlk = () => {
    const [isOpen, toggle] = useState(false)
    const { toggleLoading } = useContext(LoadingContext)
    const { toggleLogin } = useContext(LoginContext)
    const navigate = useNavigate()
    const ref = useRef()
    const btnRef = useRef()
    const onClickOutside = (e) => {
        if (e.target === btnRef.current) return
        toggle(false)
    }
    useClickOutside(ref, onClickOutside)
    const logout = () => {
        toggleLoading(true)
        fetch(`/invoice-api/logout`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ success }) => {
                if (success) {
                    toggleLogin(false)
                    window.isLogout = true
                    swal('您已成功登出', '', 'success').then(() => {
                        toggleLoading(false)
                        navigate('/')
                    })
                }
            })
            .catch(console.error)
    }
    return (
        <div className="relative">
            <button
                className="flex items-center border-0 text-[15px] text-white hover:text-primary transition-all duration-300"
                onClick={() => {
                    toggle(!isOpen)
                }}
                ref={btnRef}
            >
                <i className="icon icon-avatar mr-1" aria-hidden="true"></i>
                會員功能
            </button>
            <div
                className={`${
                    !isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                } mt-5 absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-300`}
            >
                <div
                    className={`w-[160px] p-2 relative rounded bg-white transition-all duration-300 shadow-lg`}
                    style={{
                        transform: `translateY(${isOpen ? 0 : '-20px'})`
                    }}
                    ref={ref}
                >
                    <i
                        className="icon icon-triangle -ml-1 -mt-[12px] text-white rotate-180 absolute top-0 left-1/2 -translate-x-1/2"
                        aria-hidden="true"
                    ></i>
                    <ul>
                        {MEMBER_FUNC_CONFIG.map(({ id, label, url }) => (
                            <li className="mb-1 last:mb-0" key={id}>
                                <Link
                                    className="block w-full text-default hover:text-primary transition-all duration-300"
                                    to={url}
                                    onClick={() => {
                                        toggle(false)
                                    }}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="mb-1 last:mb-0">
                            <button
                                className="block w-full text-left text-default hover:text-primary transition-all duration-300"
                                onClick={logout}
                            >
                                登出
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MemberFuncBlk)
