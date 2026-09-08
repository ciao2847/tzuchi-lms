import React from 'react'

const DetailRouter = ({ data }) => {
    return (
        <div className="space-y-[8px]">
            {data.map((item, i) => (
                <div key={i}>
                    <div className="md:[32px] pb-[16px] md:pb-[16px] text-left fz-20px text-[#2d7316] font-bold">
                        {item.title}
                    </div>
                    <div
                        className="text-justify fz-18px text-[#3c3c3c]"
                        dangerouslySetInnerHTML={{
                            __html: item.summary.replaceAll('\r\n', '<br />')
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

export default React.memo(DetailRouter)
