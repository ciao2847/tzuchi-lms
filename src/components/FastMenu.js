import React, { useState, useRef } from 'react'
import I18N from 'components/I18N'
import { useLocale, useClickOutside } from 'hooks'

const FastMenu = ({ data, className }) => {
    const ref = useRef(null)
    const [visible, toggle] = useState(false)
    const lang = useLocale()
    const LANG_WIDTH_MAP = {
        'zh-tw': 480,
        en: 800,
        ja: 640,
        ko: 480
    }
    const onClickOutside = (e) => {
        if (e.target.nextElementSibling === ref.current) return
        toggle(false)
    }
    useClickOutside(ref, onClickOutside)
    return (
        <nav
            className={`flex justify-end sticky px-5 z-[200] pointer-events-none ${className}`}
            style={{ top: 100 }}
            ref={ref}
        >
            <button
                className="btn btn-secondary w-12 h-6 pointer-events-auto text-dark"
                onClick={() => {
                    toggle(!visible)
                }}
            >
                <I18N>快速選單</I18N>
            </button>
            <div
                className={`${
                    visible ? 'pointer-events-auto' : 'opacity-0'
                } p-2 mt-8 mr-5 absolute top-0 right-0 bg-secondary/20 backdrop-blur rounded`}
                style={{ width: LANG_WIDTH_MAP[lang] }}
            >
                <i
                    className="icon icon-triangle -mt-[12px] mr-4 absolute top-0 right-0 rotate-180 text-secondary/20"
                    aria-hidden="true"
                ></i>
                <ul className="grid grid-cols-2 gap-2">
                    {data.map((item) => (
                        <li className="flex" key={item.id}>
                            <button
                                className={`btn w-full bg-primary text-dark border-secondary`}
                                style={{ minHeight: 48 }}
                                onClick={() => {
                                    toggle(false)
                                    document
                                        .querySelector(
                                            `#scroll-anchor-${item.id}`
                                        )
                                        ?.scrollIntoView({
                                            behavior: 'smooth'
                                        })
                                }}
                                id={`btn-scroll-${item.id}`}
                            >
                                <I18N>{item.linkName}</I18N>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default React.memo(FastMenu)
