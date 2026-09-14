import React, { useState } from 'react'
import BannerTitle from 'components/bannerTitle'
import SearchBar from '../../components/SearchBar'
import SouvenirsNav from './SouvenirsNav'
import SouvenirsList from './SouvenirsList'
import useSouvenirsData from '../../api/useSouvenirsData'
import { useLocale } from 'hooks'

const Page = () => {
    const lang = useLocale()
    const { data, fruit, county } = useSouvenirsData({ lang }) || {}
    const [selectedFruit, setSelectedFruit] = useState(null)

    const filteredData = selectedFruit
        ? data.filter((item) => item.categories.includes(selectedFruit.id))
        : data
    return (
        <div className="w-full">
            <BannerTitle
                title={'嚴選臺灣農特產好禮'}
                sub={`水果伴手禮`}
                content={`「嚴選製造、在地生產」孕育出寶島在地好滋味，臺灣農特產注重管控及安全品質， 各種特色產品多元選擇，年節送禮、字送兩相宜！`}
                img={`gift.jpg`}
            />
            <section className="py-5 xl:py-10 md:mb-[40px] xl:mb-0">
                <div className="mx-auto max-w-[800px]">
                    <SouvenirsNav
                        fruit={fruit}
                        setSelectedFruit={setSelectedFruit}
                    />
                    <div className="px-[16px] md:px-[24px]">
                        <SearchBar
                            fruit={fruit}
                            county={county}
                            filteredData={filteredData}
                        />
                    </div>
                </div>
                {!!data > length && (
                    <div className="mx-[24px]">
                        <div className="mx-auto max-w-[1280px] border-b border-solid border-[#c4c4c4]">
                            <p className="py-[8px] text-[#767676] text-[14px] md:text-[16px]">
                                共有{filteredData.length} 項結果
                            </p>
                        </div>
                    </div>
                )}
                <SouvenirsList data={filteredData} />
            </section>
        </div>
    )
}

export default React.memo(Page)
