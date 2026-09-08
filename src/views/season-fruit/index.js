import React from 'react'
import Breadcrumbs from 'components/Breadcrumbs'
import FruitsInfo from './FruitsInfo'
import FruitsTravel from './FruitsTravel'
import FruitsVideos from './FruitsVideos'
import FruitsSite from './FruitsSite'
import ThumbFrame from 'components/ThumbFrame'
import Spinner from 'components/Spinner'
import { useFruitDataReduxVer } from 'api'
import { useLocale } from 'hooks'
import { useParams } from 'react-router-dom'

const Page = () => {
    const { id } = useParams()
    const lang = useLocale()
    const { data } = useFruitDataReduxVer({ lang, id }) || {}
    console.log(data)

    if (!data) {
        return (
            <div className="d-flex justify-content-center p-10">
                <Spinner size={18} color={'black'} />
            </div>
        )
    }

    const { title, images, summary, months, description } = data
    const cover = images?.find((item) => item.isCover)?.url || images?.[0]?.url
    const firstParagraph = description?.split(/<br\s*\/?>|\n{2,}/)[0] ///\n{2,}/ 用於分隔雙換行,<br\s*\/?> 用於分隔 HTML 的 <br />

    return (
        <div className="w-100">
            <section className="m-auto">
                <div className="pt-[56px] xl:pt-[104px]">
                    <div className="pb-0 md:pb-[80px] bg-gradient-to-br from-[#fff] to-[#fff5d9] h-screen w-full ">
                        <div className=" mx-auto px-[16px] md:px-[24px] max-w-[768px]">
                            <Breadcrumbs
                                data={[
                                    {
                                        title: '四季水果',
                                        url: '/season-fruits'
                                    },
                                    {
                                        title: title,
                                        url: `/season-fruit/${id}`
                                    }
                                ]}
                            />
                        </div>
                        <div className="px-md-[16px]">
                            <div className="mx-auto px-[16px] md:px-0 py-[24px] md:py-[40px] max-w-[768px] ">
                                <h1 className="pt-[16px] pb-[8px] text-[40px] md:text-[56px] font-bold text-center">
                                    {title}
                                </h1>
                                <p
                                    className="fz-18px font-bold text-md-center text-justify text-[#3c3c3c]"
                                    dangerouslySetInnerHTML={{
                                        __html: firstParagraph
                                    }}
                                />
                            </div>
                            {!!cover && (
                                <div className="max-w-[1280px] mx-auto ">
                                    <ThumbFrame
                                        className="md:mx-[32px] relative aspect-[1.99468085] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-auto rounded-[0px] md:rounded-[32px]"
                                        src={cover.replace(
                                            '480x360',
                                            '1920x1080' //1920 broken
                                        )}
                                        alt=""
                                        //ratio="16by9"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* <FruitsInfo
                        className="max-w-[1200px] mx-auto"
                        data={data}
                    /> */}
                    {!!data && (
                        <FruitsInfo
                            className="max-w-[1200px] mx-auto"
                            data={data}
                        />
                    )}
                </div>
                <FruitsTravel />
                <FruitsVideos />

                {!!data && <FruitsSite data={data} />}
            </section>
        </div>
    )
}

export default React.memo(Page)
