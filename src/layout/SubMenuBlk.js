import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import useMedia from 'hooks/useMedia'
import useClickOutside from 'hooks/useClickOutside'

const SubMenuBlk = ({ data, visible, onClose }) => {
    const isLayoutMD = useMedia('(min-width: 768px)')
    const ref = useRef()
    const onClickOutside = (e) => {
        if (e.target.nextElementSibling === ref.current) return
        onClose()
    }
    useClickOutside(ref, onClickOutside)
    return (
        <div
            className={`${
                isLayoutMD && (visible ? '' : 'opacity-0 pointer-events-none')
            } sub-menu-blk p-2 -mt-[12px] transition-all duration-300`}
            ref={ref}
        >
            <ul className="grid grid-cols-2 gap-1">
                {data.map(({ id, name }) => (
                    <li key={id}>
                        <Link
                            className="btn w-full h-5 border-0 rounded text-[13px] font-bold"
                            to={`/zh-tw/explore/c:${id}/`}
                            onClick={() => {
                                onClose()
                            }}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(SubMenuBlk)
