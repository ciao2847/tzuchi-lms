import React from 'react'
import { useLocale } from 'hooks'
import I18N, { translate } from 'components/I18N'
import PrevNextLink from 'components/PrevNextLink'
import Link from 'components/Link'

const BasePrevAndNextBlk = ({ prevURL, nextURL, listURL, className }) => {
    const lang = useLocale()

    return (
        <section className={`${className}`}>
            <div className="button-group flex justify-center w-full text-default">
                {prevURL ? (
                    <PrevNextLink
                        className="flex-1"
                        url={prevURL}
                        title={`${translate(`上一則`, lang)}`}
                        label="上一則"
                        isPrev={true}
                    />
                ) : (
                    <div className="btn flex-1 px-2 text-[16px] h-6 text-info pointer-events-none bg-light">
                        <I18N>上一則</I18N>
                    </div>
                )}
                <Link
                    className="btn flex-1 px-2 text-[16px] h-6"
                    href={listURL}
                    title={`${translate('回列表', lang)}`}
                >
                    <I18N>回列表</I18N>
                </Link>
                {nextURL ? (
                    <PrevNextLink
                        url={nextURL}
                        title={`${translate(`下一則`, lang)}`}
                        label="下一則"
                        isNext={true}
                    />
                ) : (
                    <div className="btn flex-1 px-2 text-[16px] h-6 text-info pointer-events-none bg-light">
                        <I18N>下一則</I18N>
                    </div>
                )}
            </div>
        </section>
    )
}

export default React.memo(BasePrevAndNextBlk)
