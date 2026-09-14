import React from 'react'
import ThumbFrame from './ThumbFrame'
import AutoSwitchLink from '../components/AutoSwitchLink'

const FarmCard = ({ data }) => {
    const { cover, address, name, tel, url } = data

    return (
        <AutoSwitchLink
            className="flex-grow relative rounded-[16px] md:rounded-[32px] border-solid border-[1px] border-[#f0f0f0] transition-all duration-300 xl:hover:ring-[1px] xl:hover:border-[#82be66] xl:hover:ring-[#82be66] group"
            href={url}
            title={name}
            isLinkOut={true}
            target="_blank"
        >
            <div
                className="flex justify-center items-center absolute top-0 right-0 w-[40px] md:w-[52px] md:h-[52px] aspect-square bg-[#82be66] transition-all duration-300 xl:bg-transparent xl:group-hover:bg-[#82be66] rounded-tr-[16px] rounded-bl-[16px]  md:rounded-tr-[30px] md:rounded-bl-[30px]"
                href="#"
            >
                <i className="icon icon-link-out text-[#fff] xl:text-[#c4c4c4] w-[20px] h-[20px] transition-all duration-300 group-hover:text-[#fff]"></i>
            </div>
            <div className="md:flex">
                {!!cover > length && (
                    <ThumbFrame
                        className="flex-none md:my-[24px] md:ml-[24px] aspect-[1.49781659] md:aspect-square w-full md:w-[176px] md:h-[176px] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-full rounded-t-[16px] md:rounded-[32px]"
                        src={cover}
                        alt=""
                        //ratio="16by9"
                    />
                )}
                <div className="ps-[16px] py-[16px] pe-[40px] md:pe-[52px] relative">
                    <div className="text-[22px] md:text-[24px] font-bold text-[#3c3c3c]">
                        {name}
                    </div>

                    {/* <div className="flex flex-wrap gap-[8px] my-[16px]">
                            {[...new Array(5)].map((item, i) => (
                                <div
                                    className="flex justify-center items-center  w-[80px] h-[30px] rounded-pill border-[#f0f0f0] border-solid border-[1px]"
                                    key={i}
                                >
                                    <img
                                        src="./images/icon-fruit/plumlee.png"
                                        alt="plumlee"
                                        loading="lazy"
                                        className="w-[20px] h-[20px] mr-[4px]"
                                    />
                                    <div className="text-[16px] text-[#3c3c3c]">
                                        李子
                                    </div>
                                </div>
                            ))}
                        </div> */}

                    <div className="flex flex-col">
                        <div className="flex justify-start items-center">
                            <div className="flex justify-center items-center shrink-0 w-[20px] h-[20px]">
                                <i className="icon icon-tel text-[#82be66]"></i>
                            </div>
                            <div className="flex-1 ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]">
                                {tel}
                            </div>
                        </div>

                        <div className="flex justify-start items-start mt-[4px]">
                            <div className="flex justify-center items-center shrink-0  w-[20px] h-[20px]">
                                <i className="icon icon-location text-[#82be66]"></i>
                            </div>
                            <div className="flex-1 ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]">
                                {address}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AutoSwitchLink>
    )
}

export default React.memo(FarmCard)
