import React, { useEffect, useState } from 'react'
import BannerTitle from 'components/bannerTitle'
import Introduction from './Introduction'
import Notice from './Notice'
import BlockTitle from 'components/BlockTitle'
import SearchBar from 'components/SearchBar'
import ConditionSearchBlk from '../../components/ConditionSearchBlk'
import SearchList from './SearchList'
import { useSpotsData } from 'api'
import { useLocale } from 'hooks'
import { filterWithQuery } from 'constants/utils'
import { useQueryObject } from 'hooks'

const Page = () => {
    const lang = useLocale()
    const { data, county, fruit } = useSpotsData({ lang })
    const [filteredData, setFilteredData] = useState(data || [])
    const query = useQueryObject()
    console.log('data', data)

    return (
        <div>
            <div className="w-full">
                <BannerTitle
                    title={'走吧！來趟水果之旅'}
                    sub={`採果何處去`}
                    content={`旅人們不僅可以在臺灣品嚐當季鮮採水果，還可以親自體驗採果的樂趣， 讓我們一同拜訪全台各地果園！`}
                    img={`harvest.jpg`}
                />
            </div>
            <Introduction />
            <Notice />
            <section className="py-5 xl:py-10">
                <BlockTitle title="請選擇採果區域" />
                <div className="flex justify-center">
                    <ConditionSearchBlk
                        className="mb-[32px] md:mb-[64px] md:mx-auto max-w-[800px]"
                        data={data}
                        query={query}
                        countyData={county}
                        categoryData={fruit}
                        options={{
                            category: true,
                            county: true
                        }}
                    />
                </div>
                <SearchList data={data} />
            </section>
        </div>
    )
}

export default React.memo(Page)
