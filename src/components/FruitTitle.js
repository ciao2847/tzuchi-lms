import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const FruitTitle = ({ data }) => {
    const { duration, categoryName } = data
    return (
        <div className="mt-[56px] xl:mt-[104px]">
            <div className="bg-gradient-to-b from-[#fff] to-[#fff8e2] h-screen w-full ">
                <div className="mx-auto px-[16px] md:px-[24px] xl:pl-[80px]">
                    <Breadcrumbs
                        data={[{ title: '四季水果' }, { title: categoryName }]}
                    />
                </div>
                <div className="px-md-[16px]">
                    <div className="mx-auto px-[16px] md:px-0 py-[24px] md:py-[40px] max-w-[880px] text-center ">
                        <h1 className="pt-[16px] pb-[8px] text-[40px] md:text-[56px] font-bold">
                            {categoryName}
                        </h1>
                        <p className="fz-16px text-justify text-md-center">
                            {duration}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FruitTitle)
