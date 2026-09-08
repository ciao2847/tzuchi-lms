import React from 'react'
import TitleLine from '../../components/TitleLine'
import ThumbFrame from '../../components/ThumbFrame'
import TreeLink from './TreeLink'

const TreeInfo = ({ data }) => {
    const { description, units, contact_info, related_links } = data

    // 分割description標題：<strong><\/strong><br \/>與內容文字分段
    const parts = description.split(/(<strong>.*?<\/strong><br \/>)/g)

    // contact_info看到\r\n換行
    const contactInfoList = contact_info.split('\r\n')

    //將物件換成陣列
    const linksArray = Object.entries(related_links)

    return (
        <>
            <div className="mx-auto max-w-[880px]">
                <div className="py-[24px] md:py-[40px] xl:py-[64px]">
                    <TitleLine
                        title="認養方式說明"
                        fill="#fbce4c"
                        className="mb-[24px] md:mb-[32px]"
                    />
                    <div className="px-[24px] md:px-[40px]">
                        {parts.map((part, index) => {
                            if (/<strong>.*?<\/strong><br \/>/.test(part)) {
                                // 標題
                                return (
                                    <div
                                        key={index}
                                        className="md:[32px] pb-[16px] md:pb-[16px] text-left fz-20px text-[#2d7316] font-bold"
                                        dangerouslySetInnerHTML={{
                                            __html: part
                                        }}
                                    ></div>
                                )
                            } else {
                                // 內容
                                return (
                                    <p
                                        key={index}
                                        className="text-justify fz-18px text-[#3c3c3c]"
                                        dangerouslySetInnerHTML={{
                                            __html: part
                                        }}
                                    ></p>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className="py-[24px] md:py-[40px] xl:py-[64px]">
                    <TitleLine
                        title="提供認養單位"
                        fill="#fbce4c"
                        className="mb-[24px] md:mb-[32px]"
                    />
                    <div className="px-[24px] md:px-[40px] mt-[16px] xl:mt-[24px]">
                        <p className="text-justify fz-18px text-[#3c3c3c]">
                            {units}
                        </p>
                    </div>
                </div>

                <div className="py-[24px] md:py-[40px] xl:py-[64px]">
                    <TitleLine
                        title="聯絡方式"
                        fill="#fbce4c"
                        className="mb-[24px] md:mb-[32px]"
                    />
                    <div className="px-[24px] md:px-[40px] mt-[16px] xl:mt-[24px]">
                        <ul>
                            {contactInfoList.map((item, index) => (
                                <li
                                    key={index}
                                    className=" text-justify fz-18px text-[#3c3c3c]"
                                    dangerouslySetInnerHTML={{
                                        __html: item
                                    }}
                                ></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-[24px] py-[24px] md:py-[40px] xl:py-[64px]">
                <div className="mx-auto max-w-[900px]">
                    <ThumbFrame
                        className="relative aspect-[1.33469388] rounded-[16px] md:rounded-[32px]"
                        alt=""
                        src=""
                        // ratio="16by9"
                    />
                </div>
            </div>
            {!!linksArray?.length && (
                <div className="mx-auto max-w-[880px]">
                    <div className="pt-[24px] md:pt-[64px] pb-[80px] md:pb-[160px]">
                        <TitleLine
                            title="相關連結"
                            fill="#fbce4c"
                            className="mb-[24px] md:mb-[32px]"
                        />
                        <div className="mx-auto py-[40px] px-[24px] max-w-[880px]">
                            <ul className="flex flex-wrap gap-[16px] justify-start">
                                {linksArray.map(([linkName, href], i) => (
                                    <li key={i}>
                                        <TreeLink
                                            linksArray={[linkName, href]}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default React.memo(TreeInfo)
