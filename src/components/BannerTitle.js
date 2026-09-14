import Breadcrumbs from 'components/Breadcrumbs'
import I18N from 'components/I18N'
import useMedia from 'hooks/useMedia'
import React from 'react'

const BannerTitle = ({ title, sub, content, img }) => {
    const isLayoutMD = useMedia('(min-width: 768px)')
    return (
        <div
            className={`w-full h-[375px] lg:h-[33vw] max-h-[640px]`}
            style={{
                backgroundImage: `url('${process.env.BASE_PATH}/images/banner/${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="relative bg-gradient-to-t from-[#00000060] to-[#00000000] w-full h-full flex justify-center items-center">
                <div className="text-center text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] pt-5">
                    <div className="font-bold mb-4">
                        <div className="text-[20px] md:text-[24px] mb-[4px]">{sub}</div>
                        <div className="text-[32px] md:text-[40px] xl:text-[48px]">
                            {title}
                        </div>
                    </div>
                    <div className="text-[14px] md:text-[16px] xl:text-[18px] px-3">
                        {content &&
                            (isLayoutMD ? (
                                content.split(' ').map((str, i) => (
                                    <div key={i}>
                                        <I18N>{str}</I18N>
                                    </div>
                                ))
                            ) : (
                                <div className="text-left">
                                    <I18N>{content}</I18N>
                                </div>
                            ))}
                    </div>
                </div>
                <Breadcrumbs
                    data={[{ title: sub }]}
                    className="absolute left-6 bottom-0 text-white"
                />
            </div>
        </div>
    )
}

export default React.memo(BannerTitle)
