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
                isLayoutMD && (visible ? '' : 'op-0 pointer-events-none')
            } sub-menu-blk p-2 mt-n12px trs-all`}
            ref={ref}
        >
            <ul className="row g-1">
                {data.map(({ id, name }) => (
                    <li className="col-6" key={id}>
                        <Link
                            className="btn w-100 h-5 border-0 rounded fz-13px font-weight-bold"
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
