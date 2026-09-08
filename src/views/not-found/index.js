import I18N, { translate } from 'components/I18N'
import Link from 'components/Link'
import ThumbFrame from 'components/ThumbFrame'
import { useLocale } from 'hooks'
import React from 'react'

const NotFound = () => {
    const lang = useLocale()
    return (
        <div className="w-100 h-100 mt-xl-18 mt-8">
            <div className="flex flex-col justify-center items-center mx-auto py-md-5 pt-5 pb-10">
                <ThumbFrame
                    src={`${process.env.BASE_PATH}/images/not-found/404.png`}
                    ratio="1by1"
                    className="max-w-[343px] mb-3"
                    alt=""
                />
                <div className="w-100 maw-300px mx-auto mx-xl-0 text-center mb-5">
                    <div className="fz-36px font-weight-bold text-[#2D7316]">
                        404 Not Found
                    </div>
                    <div className="mt-10px fz-24px text-[#BD4F00]">
                        <I18N>本頁面網址不存在喔！</I18N>
                    </div>
                </div>
                <Link
                    className={`inline-block text-[#BD4F00]  border border-[2px] border-[#BD4F00] bg-[#fff] rounded-pill px-5 py-12px fz-20px trs-all hover:bg-[#FFF6DE]`}
                    href="/"
                    title={translate('回首頁', lang)}
                >
                    <I18N>回首頁</I18N>

                    <i
                        className={`d-inline align-middle icon icon-arrow-right fz-16px ml-4px`}
                        aria-hidden="true"
                    ></i>
                </Link>
            </div>
        </div>
    )
}

export default React.memo(NotFound)
