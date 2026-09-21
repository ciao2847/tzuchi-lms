import I18N, { translate } from 'components/I18N'
import Link from 'components/Link'
import { useLocale } from 'hooks'
import React from 'react'

const NotFound = () => {
    const lang = useLocale()
    return (
        <div className="mx-auto mt-6 flex min-h-[calc(100dvh-48px)] w-full items-center justify-center px-4 pt-[56px] xl:max-w-[1200px] xl:pt-[80px] 2xl:max-w-[1400px]">
            <div className="mx-auto flex flex-col items-center justify-center">
                {/* <ThumbFrame
                    src={`${process.env.BASE_PATH}/images/not-found/404.png`}
                    ratio="1by1"
                    className="max-w-[343px] mb-3"
                    alt=""
                /> */}
                <div className="mx-auto mb-5 w-full max-w-[300px] text-center xl:mx-0">
                    <div className="text-[36px] font-bold text-secondary">
                        404 Not Found
                    </div>
                    <div className="mt-[10px] text-[24px] text-main">
                        <I18N>本頁面網址不存在喔！</I18N>
                    </div>
                </div>
                <Link
                    className="flex text-main border-2 border-main bg-white rounded-full px-5 py-[12px] text-[20px] transition-all duration-300 hover:bg-[#FFF6DE]"
                    href="/"
                    title={translate('回首頁', lang)}
                >
                    <I18N>回首頁</I18N>

                    <i
                        className="inline align-middle icon icon-arrow-right text-[16px] ml-[4px]"
                        aria-hidden="true"
                    ></i>
                </Link>
            </div>
        </div>
    )
}

export default React.memo(NotFound)
