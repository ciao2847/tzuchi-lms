import React from 'react'
import Link from 'components/Link'
import ThumbFrame from 'components/ThumbFrame'

const TravelCard = () => {
    return (
        <Link className="flex relative h-[86px] md:h-[225px] xl:h-[240px] rounded-[16px]  md:rounded-[32px] border-solid border-[2px] border-[#f0f0f0] transition-all duration-500 hover:border-[#82be66] hover:ring-[2px] hover:ring-[#82be66] group">
            {/* <div className="relative aspect-[1.3372093] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-full rounded-l-[14px] md:rounded-l-[30px]"></div> */}
            <ThumbFrame
                className="relative aspect-[1.3255814] flex-shrink-0 w-[114px] md:w-[300px] xl:w-[320px] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-full rounded-l-[14px] md:rounded-l-[30px]"
                src={`https://unsplash.it/480/360?random`}
                alt=""
                //ratio="16by9"
            />
            <div className="ms-[16px] me-[30px] my-[8px] md:ms-[32px] md:me-[52px] md:my-[16px] w-inherit h-inherit text-ellipsis overflow-hidden">
                <div className="text-[16px] md:text-[24px] xl:text-[28px] text-[#3c3c3c]">
                    遊程項目
                </div>
                <div className="flex md:my-[16px] xl:my-[24px]">
                    <div className="flex justify-center items-center">
                        <i className="icon icon-location text-[#82be66] w-[20px] h-[20px]"></i>
                        <div className="ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]">
                            苗栗縣
                        </div>
                    </div>
                    <div className="flex justify-center items-center ml-[16px] md:ml-[24px]">
                        <i className="icon icon-time text-[#82be66] w-[20px] h-[20px]"></i>
                        <div className="ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]">
                            幾日
                        </div>
                    </div>
                </div>
                <p className="text-[14px] md:text-[18px] text-[#3c3c3c] text-justify text-ellipsis line-clamp-1 md:line-clamp-3">
                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文內文內文
                </p>
            </div>
            <div
                className="flex justify-center items-center absolute top-0 right-0 w-[30px] md:w-[52px] md:h-[52px] aspect-square bg-[#82be66] xl:bg-[transparent] transition-all duration-500 xl:group-hover:bg-[#82be66] rounded-tr-[12px] rounded-bl-[16px] md:rounded-tr-[30px] md:rounded-bl-[30px]"
                href="#"
            >
                <i className="icon icon-link-out text-[#fff] xl:text-[#c4c4c4] w-[14px] h-[14px] transition-all duration-500 group-hover:text-[#fff]"></i>
            </div>
        </Link>
    )
}

export default React.memo(TravelCard)
