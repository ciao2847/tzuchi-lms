import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import I18N, { translate } from 'components/I18N'

const SocialShareBlk = ({ title, className }) => {
    const url = location.href
    const { lang = 'zh-tw' } = useParams()
    const [hasDuplicated, toggleDuplicated] = useState(false)
    return (
        <ul
            className={`d-flex fz-24px justify-content-center align-content-center ${className} `}
        >
            <li className="mr-1 mr-0-last">
                <a
                    className="btn btn-light w-5 h-5 fz-24px rounded"
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
            <li className="mr-1 mr-0-last">
                <a
                    className="btn btn-light w-5 h-5 fz-24px rounded"
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
            <li className="mr-1 mr-0-last">
                <a
                    className="btn btn-light w-5 h-5 fz-24px rounded"
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
            {/*
            <li className="mr-1 mr-0-last">
                <a
                    className="btn btn-light w-5 h-5 fz-24px rounded"
                    href={`http://service.weibo.com/share/share.php?url=${url}&amp;title=${title}&amp;language=zh_tw`}
                    title={`${translate('分享到微博', lang)}(${translate(
                        '另開視窗',
                        lang
                    )})`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="icon icon-webio"></i>
                    <div className="sr-only">分享到微博</div>
                </a>
            </li>*/}
            <li className="mr-1 mr-0-last">
                <button
                    className="btn btn-light w-5 h-5 fz-24px position-relative overflow-hidden rounded"
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
                        } d-flex justify-content-center align-items-center px-2 bg-white text-primary border rounded fill-parent trs-all`}
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
