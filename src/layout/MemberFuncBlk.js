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
        <div className="position-relative">
            <button
                className="d-flex align-items-center border-0 fz-15px text-white hover-primary trs-all"
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
                    !isOpen && 'op-0 pointer-events-none'
                } mt-5 absolute-top-center trs-all`}
            >
                <div
                    className={`w-160px p-2 position-relative rounded bg-white trs-all drop-shadow-black-50`}
                    style={{
                        transform: `translateY(${isOpen ? 0 : '-20px'})`
                    }}
                    ref={ref}
                >
                    <i
                        className="icon icon-triangle ml-n1 mt-n12px text-white rotate-180 absolute-top-center"
                        aria-hidden="true"
                    ></i>
                    <ul>
                        {MEMBER_FUNC_CONFIG.map(({ id, label, url }) => (
                            <li className="mb-1 mb-0-last" key={id}>
                                <Link
                                    className="d-block w-100 text-default hover-primary trs-all"
                                    to={url}
                                    onClick={() => {
                                        toggle(false)
                                    }}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="mb-1 mb-0-last">
                            <button
                                className="d-block w-100 text-left"
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
