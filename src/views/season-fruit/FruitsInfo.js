import React from 'react'
import ThumbFrame from '../../components/ThumbFrame'
import TitleLine from '../../components/TitleLine'
import DetailRouter from './DetailRouter'

const CONFIG_INFO = [
    {
        title: '農百科',
        sub: '盛產期6-11月',
        content:
            '西瓜味道甘甜多汁，清爽解渴，是盛夏佳果，更不含脂肪和膽固醇，且幾乎含有人體所需的各種招牌營養素，是一種最富有營養、最純淨、食用最安全的食品。中醫界稱西瓜有清熱解暑、解煩渴、利小便、解酒毒等功效，用來治療熱症、暑熱煩渴、小便不利、咽喉疼痛、口腔發炎及酒醉。',
        img: '../images/global/social-share.jpg'
    },
    {
        title: '農特選',
        sub: '如何挑選美味西瓜？',
        content:
            '看外觀：選擇表面光滑完整、顏色青綠明亮、花紋清晰鮮明，果梗呈捲曲狀，瓜蒂部分些微凹陷者。拍果皮：聲音清脆響亮者為佳。'
    },
    {
        title: '農體驗',
        sub: '盛產期6-11月',
        content:
            '臺灣地處熱帶及亞熱帶，氣候與環境適合西瓜生長，產地遍及全臺，主要產區為花蓮、雲林、臺南、宜蘭、屏東等。近年來許多縣市舉辦西瓜節，如花蓮鳳林、苗栗後龍、苗栗白沙屯、彰化、雲林二崙，民眾可以品嘗到當地西瓜的美味、欣賞西瓜果雕、觀賞西瓜評鑑比賽、參加好玩的遊戲與DIY，並到鄰近景點半日、一日遊。',
        img: ''
    },
    {
        title: '農知識',
        content:
            '臺灣地處熱帶及亞熱帶，氣候與環境適合西瓜生長，產地遍及全臺，主要產區為花蓮、雲林、臺南、宜蘭、屏東等。近年來許多縣市舉辦西瓜節，如花蓮鳳林、苗栗後龍、苗栗白沙屯、彰化、雲林二崙，民眾可以品嘗到當地西瓜的美味、欣賞西瓜果雕、觀賞西瓜評鑑比賽、參加好玩的遊戲與DIY，並到鄰近景點半日、一日遊。',
        img: ''
    }
]

const FruitsInfo = ({ className, data }) => {
    const { summary, months, experiences, exquisite, images } = data
    const cover = images?.find((item) => item.isCover)?.url || images?.[0]?.url
    const formattedMonths = months?.toString().split('').join('、') //將月份轉換成字串並加入逗號

    return (
        <div className={`max-w-[1200px] mx-auto ${className}`}>
            <div className="py-[24px] md:py-[40px] px-[24px] md:px-[40px]">
                <div className="mx-auto max-w-[880px]">
                    <TitleLine
                        title={'農百科'}
                        fill={'#fbce4c'}
                        className={'mb-[24px] md:mb-[32px]'}
                    />

                    <div className="pb-[16px] text-left text-[20px] text-[#2d7316] font-bold">
                        盛產期{formattedMonths}月
                    </div>
                    <p className="text-justify text-[18px] text-[#3c3c3c]">
                        {summary}
                    </p>
                </div>
            </div>
            {!!exquisite?.length && (
                <div className="py-[24px] md:py-[40px] px-[24px] md:px-[40px]">
                    <div className="mx-auto max-w-[880px]">
                        <TitleLine
                            title={'農特選'}
                            fill={'#fbce4c'}
                            className={'mb-[24px] md:mb-[32px]'}
                        />
                        <DetailRouter data={exquisite} />
                        <ThumbFrame
                            src={cover.replace('640x480', '1920x1080')}
                            alt="農特選"
                            className="mt-[32px] mx-auto relative aspect-[1.5] rounded-2xl max-w-[880px]"
                        />
                    </div>
                </div>
            )}

            {!!experiences?.length && (
                <div className="py-[24px] md:py-[40px] px-[24px] md:px-[40px]">
                    <div className="mx-auto max-w-[880px]">
                        <TitleLine
                            title={'農體驗'}
                            fill={'#fbce4c'}
                            className={'mb-[24px] md:mb-[32px]'}
                        />
                        <DetailRouter data={experiences} />
                    </div>
                </div>
            )}

            {!!experiences?.length && (
                <div className="py-[24px] md:py-[40px] px-[24px] md:px-[40px]">
                    <div className="mx-auto max-w-[880px]">
                        <TitleLine
                            title={'農知識'}
                            fill={'#fbce4c'}
                            className={'mb-[24px] md:mb-[32px]'}
                        />
                        <DetailRouter data={experiences} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default React.memo(FruitsInfo)
