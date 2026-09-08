import React from 'react'
import I18N from 'components/I18N'
import BlockTitle from 'components/BlockTitle'

const rule = [
    '農事不易，水果的種類繁多，各種水果的採果原則各不相同，請依照農場及果園的體驗規則，共同維護果園環境，萬分感謝。',
    '採果時，請選擇新鮮且成熟的水果，才可品嚐到水果最美的滋味喔!',
    '顆顆珍果均是農夫們的心血，看準後下手避免造成浪費。',
    '水果因季節變化易影響水果產季，前往農場及果園採果前務必事先聯繫、預約。'
]

const Notice = () => {
    return (
        <section
            className={`py-xl-10 pt-md-5 pb-md-10 pt-4 py-8 bg-gradient-to-t from-[#FFF6DE] px-2`}
        >
            <BlockTitle title="採果注意事項" className="mx-auto" />
            <div className="w-100 max-w-[900px] mx-auto bg-[#fff] md:rounded-[32px] rounded-[16px] p-3 p-md-6">
                <ul className="list">
                    {rule.map((rule, i) => (
                        <li
                            key={i}
                            className="fz-18px fz-lx-20px mb-3 last:mb-[0] flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center"
                        >
                            <i
                                className="md:mr-[8px] d-inline-block w-[28px] h-[28px] align-middle mb-[16px] md:mb-[0] shrink-[0]"
                                aria-hidden="true"
                                style={{
                                    backgroundImage: `url(/images/global/tip.png)`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></i>
                            <I18N>{rule}</I18N>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default React.memo(Notice)
