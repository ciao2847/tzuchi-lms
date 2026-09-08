import React from 'react'
import TitleLine from '../../components/TitleLine'
import FarmCard from '../../components/FarmCard'
import useSpotsData from '../../api/useSpotsData'
import { useLocale } from 'hooks'
import Spinner from '../../components/Spinner'

const FruitsSite = () => {
    const lang = useLocale()
    const { data } = useSpotsData({ lang }) || {}

    if (!data) {
        return (
            <div className="d-flex justify-content-center p-10">
                <Spinner size={18} color={'black'} />
            </div>
        )
    }

    const limitData = data.slice(0, 6)

    return (
        <div className="mx-auto pt-[24px] pb-[80px] md:pt-[40px] md:pb-[160px] xl:pt-[80px] max-w-[768px] xl:max-w-[1200px] text-left">
            <div className="px-[16px]">
                <TitleLine title={'採果何處去'} fill={'#fbce4c'} />

                <ul className="grid grid-cols-1 xl:grid-cols-2 mt-[24px] md:mt-[64px] gap-[16px] md:gap-[24px]">
                    {limitData.map((item, i) => (
                        <li key={i} className="flex">
                            <FarmCard data={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(FruitsSite)
