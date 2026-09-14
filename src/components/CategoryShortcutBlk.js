import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { makeParams } from 'constants/utils'
import I18N from 'components/I18N'

const CategoryShortcutBlk = ({ data, query }) => {
    const [, setSearchParams] = useSearchParams()
    const category = query.category?.split(',').map((c) => c * 1) || []

    return (
        <ul className="overflow-x-auto flex xl:flex-wrap items-center xl:h-5 flex-1 -mx-2 md:-mx-3 xl:mx-0 mb-[12px] pl-2 md:pl-3 xl:mb-0 xl:pl-0">
            {data
                ?.filter((cate) => cate.shortcut)
                .map((cate) => {
                    const isAct = category?.find((c) => c === cate.id)

                    return (
                        <li className="shrink-0 mr-1" key={cate.id}>
                            <button
                                className={`${
                                    isAct ? 'btn-secondary' : ''
                                } btn h-5 px-2 rounded-full`}
                                onClick={() => {
                                    let categoryAfterMerge
                                    if (isAct) {
                                        categoryAfterMerge = category.filter(
                                            (c) => c !== cate.id
                                        )
                                    } else {
                                        categoryAfterMerge = [
                                            ...category,
                                            cate.id
                                        ]
                                    }
                                    setSearchParams(
                                        makeParams(query, {
                                            category: categoryAfterMerge
                                        })
                                    )
                                }}
                            >
                                <I18N>{cate.name}</I18N>
                            </button>
                        </li>
                    )
                })}
        </ul>
    )
}

export default React.memo(CategoryShortcutBlk)
