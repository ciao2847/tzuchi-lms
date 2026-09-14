import React from 'react'
import TitleLine from '../../components/TitleLine'

const FruitsVideos = () => {
    /* 為react添加className的設定 */
    return (
        <>
            <div className="px-[16px] md:px-[24px] bg-gradient-to-br from-[#fff] to-[#fff3cc] h-screen w-full ">
                <div className="mx-auto pt-[24px] md:pt-[40px] pb-[40px] md:pb-[80px] max-w-[900px] text-center ">
                    <TitleLine title={'採果影片'} fill={'#fbce4c'} />
                    <div className="mt-[40px] aspect-[1.77865613] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] rounded-[16px] md:rounded-[32px] overflow-hidden">
                        <iframe
                            src="https://www.youtube.com/embed/lz8R3EJ4fZc"
                            title="YouTube video player"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(FruitsVideos)
