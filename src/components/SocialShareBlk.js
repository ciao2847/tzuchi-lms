import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import I18N, { translate } from 'components/I18N'

const SocialShareBlk = ({ title, className }) => {
    const url = location.href
    const { lang = 'zh-tw' } = useParams()
    const [hasDuplicated, toggleDuplicated] = useState(false)
    return (
        <ul
            className={`flex text-[24px] justify-center content-center ${className} `}
        >
            <li className="mr-1 last:mr-0">
                <a
                    className="btn btn-light w-5 h-5 text-[24px] rounded"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    title={`${translate('分享到 facebook', lang)}(${translate(
                        '另開視窗',
                        lang
                    )})`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="icon icon-facebook"></i>
                    <div className="sr-only">分享到 facebook</div>
                </a>
            </li>
            <li className="mr-1 last:mr-0">
                <a
                    className="btn btn-light w-5 h-5 text-[24px] rounded"
                    href={`http://line.naver.jp/R/msg/text/?${title}%20${url}`}
                    title={`${translate('分享到 line', lang)}(${translate(
                        '另開視窗',
                        lang
                    )})`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="icon icon-line"></i>
                    <div className="sr-only">分享到 line</div>
                </a>
            </li>
            <li className="mr-1 last:mr-0">
                <a
                    className="btn btn-light w-5 h-5 text-[24px] rounded"
                    href={`https://twitter.com/home/?status=${title}%20${url}`}
                    title={`${translate('分享到 twitter', lang)}(${translate(
                        '另開視窗',
                        lang
                    )})`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="icon icon-twitter"></i>
                    <div className="sr-only">分享到 twitter</div>
                </a>
            </li>
            <li className="mr-1 last:mr-0">
                <button
                    className="btn btn-light w-5 h-5 text-[24px] relative overflow-hidden rounded"
                    onClick={() => {
                        navigator.clipboard?.writeText(url).then(() => {
                            toggleDuplicated(true)
                        })
                    }}
                >
                    <i className="icon icon-duplicate"></i>
                    <div className="sr-only">複製網址</div>
                    <div
                        className={`${
                            hasDuplicated ? '' : 'translate-y-[100%]'
                        } flex justify-center items-center px-2 bg-white text-primary border rounded absolute inset-0 transition-all duration-300`}
                        onTransitionEnd={() => {
                            setTimeout(() => {
                                toggleDuplicated(false)
                            }, 300)
                        }}
                    >
                        <i className="icon icon-checked" aria-hidden="true"></i>
                    </div>
                </button>
            </li>
        </ul>
    )
}

export default React.memo(SocialShareBlk)
