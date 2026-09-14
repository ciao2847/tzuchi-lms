import React from 'react'
import Link from 'components/Link'

const TreeLink = ({ linksArray }) => {
    const [linkName, href] = linksArray

    return (
        <Link
            href={href}
            className="flex justify-center items-center py-[12px] px-[24px] w-fit rounded-full border-solid border-[#82be66] border-2 justify-self-start transition-all duration-300 hover:bg-[#e4f4dd]"
        >
            <i className="mr-[8px] text-[#2d7316] icon icon-link"></i>
            <div className="text-[20px] font-bold text-[#2d7316]">
                {linkName}
            </div>
        </Link>
    )
}

export default React.memo(TreeLink)
