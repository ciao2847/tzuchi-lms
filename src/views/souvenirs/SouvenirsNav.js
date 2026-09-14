import React from 'react'

const SouvenirsNav = ({ fruit, setSelectedFruit }) => {
    return (
        <div className="px-[24px] ">
            {/* className接收外面傳進來的樣式 */}
            {!!fruit > length && (
                <ul className="flex items-center md:justify-center gap-[16px] -mx-3 pl-[16px] md:pl-[80px] xl:pl-0 text-center overflow-x-auto md:overflow-visible">
                    {fruit.map((item, i) => (
                        <li
                            className="shrink-0 py-[12px] px-[24px] border border-[#f0f0f0] rounded-full cursor-pointer hover:bg-[#82be66] group transition-all duration-300"
                            key={i}
                            onClick={() => setSelectedFruit(item)}
                        >
                            <div className="text-[18px] text-[#767676] group-hover:text-white">
                                {item.name}
                            </div>
                        </li>
                    ))}
                    {/* key 設i j k ，若迴圈裡面還有迴圈，設不一樣的key，反之都用i即可 */}
                    <li></li> {/* 多設一個li讓最後一個li不會貼在邊邊 */}
                </ul>
            )}
        </div>
    )
}

export default React.memo(SouvenirsNav)
