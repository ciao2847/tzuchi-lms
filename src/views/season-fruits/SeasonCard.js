import React from 'react'
import Link from 'components/Link'
import ThumbFrame from 'components/ThumbFrame'

const Card = ({ data }) => {
    const { id, cover, title, months, subtitle, summary } = data
    return (
        <Link
            className="d-block w-100 border-[#f0f0f0] border-[1px] text-[#3c3c3c] relative  border-solid  rounded-[30px] bg-white  overflow-hidden hover:border-[#82be66] hover:ring-[#82be66] ring-[2px] ring-transparent group transition-all duration-300"
            href={`/season-fruit/${id}`}
        >
            <ThumbFrame
                className="aspect-[1.49781659]"
                //src="https://unsplash.it/200/200"
                src={cover.replace('480x360', '640x480')}
                alt={title}
                //ratio="16by9"
            />
            <div className="pb-[32px]">
                <div className="py-[16px] px-[-32px] text-center fz-28px font-bold group-hover:text-[#fff] group-hover:bg-[#82be66] transition-all duration-300">
                    {title}
                </div>
                <div className="px-[24px]">
                    <div className="flex justify-start items-center py-[8px] text-[#bd4f00]">
                        <i className="pr-[8px] icon icon-sun"></i>
                        <div className="text-[#bd4f00] fz-18px font-bold">
                            {months.join('、')}月
                        </div>
                    </div>
                    <div className="pb-[8px] text-left text-[#767676] fz-16px font-bold">
                        {subtitle}
                    </div>
                    <p className="pb-[32px] xl:pb-[8px] text-left text-[#3c3c3c] fz-14px font-normal w-100">
                        {summary}
                    </p>
                    {/*設計稿在互動邏輯上不一定是對的*/}
                </div>
            </div>
        </Link>
    )
}

export default React.memo(Card)
