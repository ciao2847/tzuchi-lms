import React from 'react'
import { useLocale } from 'hooks'
import I18N, { translate } from 'components/I18N'
import Link from 'components/Link'
import AnchorFix from 'components/AnchorFix'
import BlockTitle from 'components/BlockTitle'

const rule = [
    {
        id: 1,
        title: '日本',
        img: 'flag-jp.jpg',
        content: '部分水果經檢疫合格符合輸入國檢疫規定可攜帶出境',
        detail: {
            title: '日本植物防疫所',
            url: 'https://www.maff.go.jp/pps/j/search/ikuni/tw.html#pc'
        },
        fruit: [
            { title: '鳳梨', url: '#' },
            { title: '椰子' },
            { title: '榴槤' }
        ]
    },
    {
        id: 2,
        title: '韓國',
        img: 'flag-kr.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: '韓國關稅廳',
            url: 'https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=2837&cntntsId=829'
        }
    },
    {
        id: 3,
        title: '中國大陸',
        img: 'flag-cn.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: '中華人民共和國廈門海關',
            url: 'http://xiamen.customs.gov.cn/xiamen_customs/lkjjtgcjsfw/3966558/3971626/index.html?ess%24ctr151088%24ListC_Info%24ctl00%24KEYWORDS=%E7%A6%81%E6%AD%A2%E6%90%BA%E5%B8%A6%E5%85%A5%E5%A2%83'
        }
    },
    {
        id: 4,
        title: '香港',
        img: 'flag-hk.jpg',
        content: '可以當作伴手禮攜帶出境',
        detail: {
            title: '香港海關',
            url: 'https://www.customs.gov.hk/tc/service-enforcement-information/passenger-clearance/faqs/index.html'
        },
        fruit: [{ title: '台灣四季水果', url: '/season-fruits' }]
    },
    {
        id: 5,
        title: '新加坡',
        img: 'flag-sg.jpg',
        content: '可以當作伴手禮攜帶出境',
        detail: {
            title: '新加坡食品局',
            url: 'https://www.sfa.gov.sg/food-import-export/bringing-food-for-personal-use'
        },
        fruit: [{ title: '台灣四季水果', url: '/season-fruits' }]
    },
    {
        id: 6,
        title: '阿拉伯聯合大公國',
        img: 'flag-ae.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: '外交部領事事務局',
            url: 'https://www.boca.gov.tw/sp-foof-countrycp-03-51-e5142-02-1.html'
        }
    },
    {
        id: 7,
        title: '馬來西亞',
        img: 'flag-my.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: 'KKday網站',
            url: 'https://www.kkday.com/zh-tw/blog/117272/asia-malaysia-covid19-entry-restrictions?srsltid=AfmBOooIarqPGLhvDeelXgkpsW1rocu45VOuPdaNcSSyyApYBIELGJNF'
        }
    },
    {
        id: 8,
        title: '歐盟',
        img: 'flag-eu.jpg',
        content: '部分水果可以當作伴手禮攜帶出境',
        detail: {
            title: '歐盟委員會',
            url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries_en'
        },
        fruit: [
            { title: '鳳梨', url: '#' },
            { title: '椰子' },
            { title: '榴槤' },
            { title: '椰棗' },
            { title: '香蕉' }
        ]
    },
    {
        id: 9,
        title: '紐西蘭',
        img: 'flag-nz.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: '外交部領事事務局',
            url: 'https://www.boca.gov.tw/sp-foof-countrycp-01-19-2e478-02-1.html'
        }
    },
    {
        id: 10,
        title: '加拿大',
        img: 'flag-ca.jpg',
        content: '部分水果可以當作伴手禮攜帶出境',
        detail: {
            title: '加拿大食品檢驗局',
            url: 'https://inspection.canada.ca/en/food-safety-consumers/bringing-food-canada-personal-use'
        },
        fruit: [
            { title: '枇杷', url: '#' },
            { title: '西瓜', url: '#' },
            { title: '芒果', url: '#' },
            { title: '荔枝', url: '#' },
            { title: '柿子', url: '#' },
            { title: '芭樂', url: '#' }
        ]
    },
    {
        id: 11,
        title: '印尼',
        img: 'flag-id.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: '外交部領事事務局',
            url: 'https://www.boca.gov.tw/sp-foof-countrycp-01-12-c23b0-02-1.html'
        }
    },
    {
        id: 12,
        title: '泰國',
        img: 'flag-th.jpg',
        content: '部分水果經檢疫合格符合輸入國檢疫規定可攜帶出境',
        detail: {
            title: '泰國觀光局',
            url: 'https://www.tattpe.org.tw/HowToGo.html?id=2'
        },
        fruit: [{ title: '台灣四季水果', url: '/season-fruits' }]
    },
    {
        id: 13,
        title: '瑞士',
        img: 'flag-ch.jpg',
        content: '部分水果可以當作伴手禮攜帶出境',
        detail: {
            title: '駐瑞士台北文化經濟代表團',
            url: 'https://www.roc-taiwan.org/ch/post/6427.html'
        },
        fruit: [
            { title: '鳳梨', url: '#' },
            { title: '椰子' },
            { title: '榴槤' },
            { title: '椰棗' },
            { title: '香蕉' }
        ]
    },
    {
        id: 14,
        title: '美國',
        img: 'flag-us.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: '外交部領事事務局',
            url: 'https://www.boca.gov.tw/sp-foof-countrycp-01-100-57cb3-1.html'
        }
    },
    {
        id: 15,
        title: '澳大利亞',
        img: 'flag-au.jpg',
        content: '不可當作伴手禮攜帶出境',
        detail: {
            title: '外交部領事事務局',
            url: 'https://www.boca.gov.tw/sp-foof-countrycp-03-17-c471c-02-1.html'
        }
    }
]

const Rule = () => {
    const lang = useLocale()
    const ANCHOR_CONFIG = [
        { id: 1, title: '日本', img: 'flag-jp.jpg' },
        { id: 2, title: '韓國', img: 'flag-kr.jpg' },
        { id: 3, title: '中國大陸', img: 'flag-cn.jpg' },
        { id: 4, title: '香港', img: 'flag-hk.jpg' },
        { id: 5, title: '新加坡', img: 'flag-sg.jpg' },
        { id: 6, title: '阿拉伯聯合大公國', img: 'flag-ae.jpg' },
        { id: 7, title: '馬來西亞', img: 'flag-my.jpg' },
        { id: 8, title: '歐洲聯盟', img: 'flag-eu.jpg' },
        { id: 9, title: '紐西蘭', img: 'flag-nz.jpg' },
        { id: 10, title: '加拿大', img: 'flag-ca.jpg' },
        { id: 11, title: '印尼', img: 'flag-id.jpg' },
        { id: 12, title: '泰國', img: 'flag-th.jpg' },
        { id: 13, title: '瑞士', img: 'flag-ch.jpg' },
        { id: 14, title: '美國', img: 'flag-us.jpg' },
        { id: 15, title: '澳大利亞', img: 'flag-au.jpg' }
    ]

    return (
        <>
            <section className="py-10 px-[16px] lg:px-[0]">
                <ul className="md:max-w-[600px] max-w-[400px] mx-auto grid md:grid-cols-4 grid-cols-3 md:gap-x-10 gap-x-4 gap-y-5 md:mb-5 mb-2">
                    {ANCHOR_CONFIG.map((config, i) => {
                        if (config.hideIn && config.hideIn.includes(lang)) {
                            return null
                        }

                        return (
                            <li
                                key={i}
                                className="group flex flex-col items-center"
                            >
                                <button
                                    className="block md:w-full w-[100px]"
                                    onClick={() => {
                                        document
                                            .querySelector(
                                                `#anchor-${config.id}`
                                            )
                                            .scrollIntoView({
                                                behavior: 'smooth'
                                            })
                                    }}
                                    key={i}
                                >
                                    <div
                                        className="md:h-[80px] h-[68px] w-full mb-1 bg-info rounded-[8px] outline outline-1 outline-[#C4C4C4] group-hover:outline-[#82BE66] group-hover:outline-2 group-hover:drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]"
                                        style={{
                                            backgroundImage: `url(${process.env.BASE_PATH}/images/country/${config.img})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    ></div>
                                </button>
                                <div className="h-8 w-full px-1 block text-[20px] text-center group-hover:text-[#2D7316]">
                                    <I18N>{config.title}</I18N>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <p className="max-w-[880px] mx-auto text-[18px] md:text-[20px] px-3">
                    ※{' '}
                    <I18N>
                        將植物（水果、蔬菜等）帶到國外的方式，分為旅客攜帶、貨物、郵寄等3種，本網站介紹的是旅客攜帶的規定。
                    </I18N>
                </p>
            </section>
            <section className="py-10 px-2 md:px-0">
                <BlockTitle title="旅客攜帶規定" className="mx-auto" />
                <ul className="max-w-[900px] mx-auto">
                    {rule.map((rule, i) => (
                        <li
                            key={i}
                            className="relative md:px-5 md:py-3 p-2 xl:mb-4 mb-3"
                        >
                            <AnchorFix id={`anchor-${rule.id}`} />
                            <div className="border-0 border-b-2 border-dashed pb-2 mb-2">
                                <div className="text-[24px] md:text-[28px] font-bold inline-flex gap-2 mb-2">
                                    <span
                                        className="h-[40px] w-[60px] bg-info rounded-[4px] outline outline-1 outline-[#C4C4C4] group-hover:outline-[#82BE66] group-hover:outline-2 group-hover:drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]"
                                        style={{
                                            backgroundImage: `url(${process.env.BASE_PATH}/images/country/${rule.img})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    ></span>
                                    <I18N>{rule.title}</I18N>
                                </div>
                                <div className="text-[16px] md:text-[20px] text-[#2D7316] ">
                                    <div>
                                        <I18N>{rule.content}</I18N>
                                    </div>
                                    <div>
                                        <I18N>詳情參考：</I18N>
                                        <Link
                                            className="text-[#BD4F00] hover:text-[#FBCE4C] inline-flex"
                                            title={`${translate(
                                                rule.detail.title,
                                                lang
                                            )} (${translate(
                                                '另開視窗',
                                                lang
                                            )})`}
                                            href={rule.detail.url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <span className="underline underline-offset-4">
                                                <I18N>{rule.detail.title}</I18N>
                                            </span>
                                            <i
                                                className="icon icon-link-out ml-[4px]"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <ul className="flex flex-wrap gap-3">
                                {rule.fruit?.map((fruit, j) => (
                                    <li key={j} className="group">
                                        {fruit.url ? (
                                            <Link
                                                className="inline-flex rounded-full px-[12px] py-[4px] border group-hover:border-[#FBCE4C]"
                                                title={translate(
                                                    fruit.title,
                                                    lang
                                                )}
                                                href={fruit.url}
                                            >
                                                <I18N>{fruit.title}</I18N>
                                                <i
                                                    className="icon icon-arrow-right ml-[4px] text-[#C4C4C4] group-hover:text-[#FBCE4C]"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>
                                        ) : (
                                            <div className="inline-flex rounded-full px-[12px] py-[4px] border">
                                                <I18N>{fruit.title}</I18N>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <p className="max-w-[880px] mx-auto text-[18px] md:text-[20px] pt-4 px-[16px] md:px-[40px] lg:px-0 mb-10">
                    <I18N>
                        若對於出境伴手禮有任何問題，請洽農業部動植物防疫檢疫署。
                    </I18N>
                    <br />
                    <I18N>電子郵件</I18N>：dpq@aphia.gov.tw
                    <br />
                    <I18N>電話</I18N>：02-23431406
                </p>
            </section>
        </>
    )
}

export default React.memo(Rule)
