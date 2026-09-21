import React from 'react'
import Breadcrumbs from 'components/Breadcrumbs'
import I18N from 'components/I18N'

const TitleBlk = ({
    breadcrumbs = [],
    className = '',
    icon,
    rightContent,
    title
}) => {
    const breadcrumbItems = breadcrumbs.length ? breadcrumbs : [{ title }]

    return (
        <header
            className={`border-y border-solid border-[#dce5f0] bg-gradient-to-r from-[#e8f2ff] via-[#eff6ff] to-[#f8fbff] ${className}`}
        >
            <div className="mx-auto w-full px-4 py-3 md:px-6 md:py-4 xl:max-w-[1200px] xl:px-6 2xl:max-w-[1400px] 2xl:px-0">
                <Breadcrumbs
                    data={breadcrumbItems}
                    contained={false}
                    className="text-[#60748c]"
                />
                <div
                    className={`flex items-center gap-3`}
                >
                    {icon && (
                        <span
                            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-solid border-[#d8e7fa] bg-white text-secondary md:size-11"
                            aria-hidden="true"
                        >
                            <i
                                className={`icon icon-${icon} text-[18px] md:text-[20px]`}
                            />
                        </span>
                    )}
                    <h1 className="w-full  text-[20px] font-bold leading-7 text-primary md:text-[24px] md:leading-8 xl:text-[28px] xl:leading-9">
                        <I18N>{title}</I18N>
                    </h1>
                    {rightContent && (
                        <div className="ml-auto flex w-full justify-end md:w-auto">
                            {rightContent}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default React.memo(TitleBlk)
