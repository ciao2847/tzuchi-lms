import React from 'react'
import { useLocale } from 'hooks'
import useMedia from 'hooks/useMedia'
import AutoSwitchLink from 'components/AutoSwitchLink'

const CONFIG = [
    {
        icon: '/images/index/entrance-01.png',
        size: 'w-[56px] md:w-[80px]',
        title: '健康ok棒',
        link: 'https://www.youtube.com/@dltzuchi/videos',
        isLinkOut: true
    },
    {
        icon: '/images/index/entrance-02.png',
        size: 'w-[40px] md:w-[56px]',
        title: '演講網',
        link: 'https://nlms.tzuchi.com.tw/speech/'
    },
    {
        icon: '/images/index/entrance-03.png',
        size: 'w-[40px] md:w-[56px]',
        title: 'ＫＭ知識管理平台',
        link: 'http://10.2.10.236:8064/tzuchi/index/km.php'
    },
    {
        icon: '/images/index/entrance-04.png',
        size: 'w-[44px] md:w-[68px]',
        title: '素材圖庫',
        link: 'http://10.2.10.236:8064/tzuchi/lmsresource/index.php?type=ppts'
    },
    {
        icon: '/images/index/entrance-05.png',
        size: 'w-[56px] md:w-[68px]',
        title: 'Ｑ＆Ａ',
        link: 'https://cms.tzuchi.com.tw/dl/2024/elearning_qa/index.html',
        isLinkOut: true
    },
    {
        icon: '/images/index/entrance-06.png',
        size: 'w-[48px] md:w-[60px]',
        title: '問題反映',
        link: 'https://www.surveycake.com/s/z9Agx',
        isLinkOut: true
    }
]

const EntranceSection = () => {
    const lang = useLocale()
    const isLayoutMD = useMedia('(min-width: 768px)')
    const isLayoutXL = useMedia('(min-width: 1024px)')
    const isLayoutXXL = useMedia('(min-width: 1920px)')

    return (
        <section className="bg-primary-light py-10 md:py-20 xl:py-32 px-4 md:px-6 xl:px-10">
            <h2 className="mb-6 xl:mb-8 text-primary text-center text-[24px] md:text-[28px] xl:text-[36px] font-bold">
                學習服務入口
            </h2>
            <ul className="mx-auto grid w-full grid-cols-3 gap-2 md:gap-4 xl:max-w-[1200px] xl:grid-cols-6 2xl:max-w-[1400px]">
                {CONFIG.map(({ icon, title, size, link, isLinkOut }) => (
                    <li
                        key={title}
                        className="group h-[109px] md:h-[136px] bg-white drop-shadow rounded-[8px]"
                    >
                        <AutoSwitchLink
                            href={link}
                            className="flex h-full flex-col items-center justify-center md:px-2 py-2"
                            isLinkOut={isLinkOut}
                        >
                            <img
                                src={icon}
                                className={`h-[53px] md:h-20 relative top-2 max-w-full shrink-0 object-contain ${size}`}
                                alt=""
                            />
                            <p className="flex h-10 w-full shrink-0 items-center justify-center text-center text-secondary group-hover:text-main text-[12px] md:text-[18px] font-bold leading-5 transition-colors duration-300">
                                {title}
                            </p>
                        </AutoSwitchLink>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default React.memo(EntranceSection)
