import React from 'react'
import ThumbFrame from 'components/ThumbFrame'
import AutoSwitchLink from 'components/AutoSwitchLink'

const SouvenirsCard = ({ data }) => {
    const { id, name, spot_name, tel, cover } = data
    return (
        <AutoSwitchLink
            title={name}
            isLinkOut={false}
            href={`/souvenir/${id}`}
            className="flex relative h-[110px] md:h-[184px] rounded-[16px] md:rounded-[32px] border-solid border border-[#f0f0f0] transition-all duration-500 hover:border-[#82be66] hover:ring-[2px] hover:ring-[#82be66] group"
        >
            <ThumbFrame
                className="relative aspect-[1.3] flex-shrink-0 w-[143px] md:w-[245px] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-full rounded-l-[14px] md:rounded-l-[30px]"
                src={cover}
                alt={spot_name}
            />
            <div className="flex flex-col justify-center mb-[5px] px-[16px] md:my-[24px] md:px-[24px] w-inherit h-inherit text-ellipsis overflow-hidden">
                <div className="md:mb-[16px] text-[16px] md:text-[22px] text-[#3c3c3c]">
                    {name}
                </div>

                <div>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center flex-shrink-0 mr-[8px] w-[20px] h-[20px]">
                            <i className="icon icon-location text-[#82be66]"></i>
                        </div>
                        <div className="flex-1 text-[14px] md:text-[18px] text-[#3c3c3c]">
                            {spot_name}
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center flex-shrink-0 mr-[8px] w-[20px] h-[20px]">
                            <i className="icon icon-tel text-[#82be66]"></i>
                        </div>
                        <div className="flex-1 text-[14px] md:text-[18px] text-[#3c3c3c]">
                            {tel}
                        </div>
                    </div>
                </div>
            </div>
        </AutoSwitchLink>
    )
}

export default React.memo(SouvenirsCard)
