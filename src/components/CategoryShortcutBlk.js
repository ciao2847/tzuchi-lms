import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { makeParams } from 'constants/utils'
import I18N from 'components/I18N'

const CategoryShortcutBlk = ({ data, query }) => {
    const [, setSearchParams] = useSearchParams()
    const category = query.category?.split(',').map((c) => c * 1) || []

    return (
        <ul className="scroll-x-blk d-flex flex-xl-wrap align-items-center h-xl-5 flex-fill flex-fill mx-n2 mx-md-n3 mx-xl-0 mb-12px pl-2 pl-md-3 mb-xl-0 pl-xl-0">
            {data
                ?.filter((cate) => cate.shortcut)
                .map((cate) => {
                    const isAct = category?.find((c) => c === cate.id)

                    return (
                        <li className="flex-shrink-0 mr-1" key={cate.id}>
                            <button
                                className={`${
                                    isAct && 'btn-secondary'
                                } btn h-5 px-2 rounded-pill`}
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
