import React, { useEffect } from 'react'
import BannerTitle from 'components/bannerTitle'
import Introduction from './Introduction'
import Rule from './Rule'
import { useFruitDataReduxVer } from 'api'
import { useLocale } from 'hooks'
import { useParams } from 'react-router-dom'

const Page = () => {
    const { id = '3' } = useParams()
    const lang = useLocale()
    const { data } = useFruitDataReduxVer({ lang, id }) || {}
    useEffect(() => {
        if (!data) return
    })
    console.log(data)
    return (
        <div className="w-full">
            <BannerTitle
                title={'甜蜜滋味傳遞世界'}
                sub={`出境伴手禮`}
                content={`了解目的地國家的規定，帶回國當伴手禮`}
                img={`foreign-gift.jpg`}
            />
            <Introduction />
            <Rule />
        </div>
    )
}

export default React.memo(Page)
