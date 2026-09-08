import React from 'react'
import { useLocale } from 'hooks'
import useMedia from 'hooks/useMedia'
import I18N, { translate } from 'components/I18N'
import ThumbFrame from 'components/ThumbFrame'
import FruitTheme from './FruitTheme'
import BlockTitle from 'components/BlockTitle'
import FruitCalendar from './FruitCalendar'

const Page = () => {
    const lang = useLocale()
    const isLayoutMD = useMedia('(min-width: 768px)')
    const isLayoutXL = useMedia('(min-width: 1024px)')
    const isLayoutXXL = useMedia('(min-width: 1920px)')

    return (
        <>
            <div
                className={`w-100 ${
                    isLayoutXXL && 'xl:max-h-none'
                } lg:max-h-[90vh] lg:min-h-[960px] h-[100vh] relative`}
            >
                <ThumbFrame
                    src={
                        isLayoutXL
                            ? `${process.env.BASE_PATH}/images/index/banner.jpg`
                            : `${process.env.BASE_PATH}/images/index/banner-sm.jpg`
                    }
                    alt=""
                    ratio="16by9"
                    className="h-100"
                    lazy={false}
                />
                <div className="bg-gradient-to-t from-[#00000070] absolute left-0 bottom-0 w-100 h-25"></div>
                <div className="absolute xl:w-[680px] md:w-[640px] w-[343px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-md-8 z-[3]">
                    <img
                        src={`${process.env.BASE_PATH}/images/index/banner-title.svg`}
                        className="w-100 h-auto bg-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] thumb embed-responsive-item pointer-events-none"
                        alt={translate('季節採果去', lang)}
                    />
                    <div className="fz-16px fz-md-20px pl-md-2 mt-md-n3 mt-2 leading-8">
                        {isLayoutMD ? (
                            <>
                                <div className="relative mb-2">
                                    <I18N>臺灣素有「水果王國」的美譽，</I18N>
                                    <span
                                        className="font-weight-bold absolute top-0 left-0 -z-10 select-none"
                                        style={{ WebkitTextStroke: '5px #fff' }}
                                        aria-hidden="true"
                                    >
                                        <I18N>
                                            臺灣素有「水果王國」的美譽，
                                        </I18N>
                                    </span>
                                </div>
                                <div className="relative mb-2">
                                    <I18N>
                                        水果種類豐富，一年四季皆可嚐到鮮甜可口的水果，
                                    </I18N>
                                    <span
                                        className="font-weight-bold absolute top-0 left-0 -z-10 select-none"
                                        style={{ WebkitTextStroke: '5px #fff' }}
                                        aria-hidden="true"
                                    >
                                        <I18N>
                                            水果種類豐富，一年四季皆可嚐到鮮甜可口的水果，
                                        </I18N>
                                    </span>
                                </div>
                                <div className="relative mb-2">
                                    <I18N>
                                        走趟寶島，讓我們一起享受臺灣水果帶來幸福健康新鮮的好滋味！
                                    </I18N>
                                    <span
                                        className="font-weight-bold absolute top-0 left-0 -z-10 select-none"
                                        style={{ WebkitTextStroke: '5px #fff' }}
                                        aria-hidden="true"
                                    >
                                        <I18N>
                                            走趟寶島，讓我們一起享受臺灣水果帶來幸福健康新鮮的好滋味！
                                        </I18N>
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="relative">
                                <I18N>
                                    臺灣素有「水果王國」的美譽，
                                    水果種類豐富，一年四季皆可嚐到鮮甜可口的水果，
                                    走趟寶島，讓我們一起享受臺灣水果帶來幸福健康新鮮的好滋味！
                                </I18N>
                                <span
                                    className="font-weight-bold absolute top-0 left-0 -z-10 select-none"
                                    style={{ WebkitTextStroke: '5px #fff' }}
                                    aria-hidden="true"
                                >
                                    <I18N>
                                        臺灣素有「水果王國」的美譽，
                                        水果種類豐富，一年四季皆可嚐到鮮甜可口的水果，
                                        走趟寶島，讓我們一起享受臺灣水果帶來幸福健康新鮮的好滋味！
                                    </I18N>
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className={`absolute bottom-[-4px] left-0 w-100`}
                    aria-hidden="true"
                >
                    <div className={`absolute left-0 w-100 bottom-0`}>
                        <img
                            src={
                                isLayoutXL
                                    ? `${process.env.BASE_PATH}/images/index/banner-bottom.svg`
                                    : `${process.env.BASE_PATH}/images/index/banner-bottom-sm.svg`
                            }
                            className="w-[100%] thumb-frame embed-responsive bg-none"
                            alt=""
                        />
                        <img
                            src={`${process.env.BASE_PATH}/images/index/banner-left.svg`}
                            className={`${
                                isLayoutXXL && 'xl:max-w-none'
                            } lg:w-[25vw] w-[35vw] absolute left-0 lg:bottom-[30%] bottom-[40%] max-w-[480px] thumb-frame embed-responsive bg-none`}
                            alt=""
                        />
                        <img
                            src={`${process.env.BASE_PATH}/images/index/banner-right.svg`}
                            className={`${
                                isLayoutXXL && 'xl:max-w-none'
                            } w-[25vw] absolute right-0 bottom-[5%] hidden lg:block max-w-[480px] thumb-frame embed-responsive bg-none`}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <FruitTheme />
            <section className="py-8">
                <BlockTitle title="水果產季月曆" className="mx-auto" />
                <FruitCalendar className="mb-8" />
            </section>
        </>
    )
}

export default React.memo(Page)
