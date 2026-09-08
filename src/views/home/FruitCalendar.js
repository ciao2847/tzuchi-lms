import React from 'react'
import useMedia from 'hooks/useMedia'
import I18N from 'components/I18N'

const fruitCalender = [
    {
        title: '枇杷',
        icon: 'loquat',
        months: [{ id: 3 }, { id: 4 }]
    },
    {
        title: '嘉寶果',
        icon: 'jaboticaba',
        months: [{ id: 3 }, { id: 4 }]
    },
    {
        title: '梅子',
        icon: 'plum',
        months: [{ id: 4 }]
    },
    {
        title: '桑葚',
        icon: 'mulberry',
        months: [{ id: 4 }]
    },
    {
        title: '李子',
        icon: 'plumlee',
        months: [{ id: 4 }, { id: 5 }, { id: 6 }]
    },
    {
        title: '桃子',
        icon: 'peach',
        months: [
            { id: 4, type: '甜蜜桃' },
            { id: 5, type: '甜蜜桃' },
            { id: 6, type: '水蜜桃' },
            { id: 7, type: '水蜜桃' },
            { id: 8, type: '水蜜桃' }
        ]
    },
    {
        title: '西瓜',
        icon: 'watermelon',
        months: [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
    },
    {
        title: '蓮霧',
        icon: 'waxApple',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '荔枝',
        icon: 'litchi',
        months: [
            { id: 6, type: '玉荷包' },
            { id: 7, type: '黑葉' },
            { id: 8, type: '黑葉' },
            { id: 9, type: '糯米' }
        ]
    },
    {
        title: '芒果',
        icon: 'mango',
        months: [
            { id: 6, type: '土芒果' },
            { id: 7, type: '愛文' },
            { id: 8, type: '愛文' },
            { id: 9, type: '金煌' },
            { id: 10, type: '凱特' }
        ]
    },
    {
        title: '葡萄',
        icon: 'grape',
        months: [
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '梨子',
        icon: 'pear',
        months: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
    },
    {
        title: '洋香瓜',
        icon: 'melon',
        months: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
    },
    {
        title: '紅龍果',
        icon: 'dragon',
        months: [
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 }
        ]
    },
    {
        title: '無花果',
        icon: 'fig',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '龍眼',
        icon: 'longan',
        months: [{ id: 7 }, { id: 8 }]
    },
    {
        title: '藍莓',
        icon: 'blueberry',
        months: [{ id: 7 }, { id: 8 }]
    },
    {
        title: '百香果',
        icon: 'passiflora',
        months: [{ id: 7 }, { id: 8 }, { id: 9 }]
    },
    {
        title: '酪梨',
        icon: 'avocado',
        months: [{ id: 7 }, { id: 8 }, { id: 9 }]
    },
    {
        title: '釋迦',
        icon: 'sakya',
        months: [
            { id: 1, type: '鳳梨' },
            { id: 2, type: '鳳梨' },
            { id: 3, type: '鳳梨' },
            { id: 8, type: '大目' },
            { id: 9, type: '大目' },
            { id: 10, type: '大目' },
            { id: 11, type: '大目' },
            { id: 12, type: '大目' }
        ]
    },
    {
        title: '文旦柚',
        icon: 'pomelo',
        months: [{ id: 9 }, { id: 10 }]
    },
    {
        title: '洛神',
        icon: 'roselle',
        months: [{ id: 9 }, { id: 10 }, { id: 11 }]
    },
    {
        title: '奇異果',
        icon: 'kiwi',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '柿子',
        icon: 'persimmon',
        months: [{ id: 10 }, { id: 11 }, { id: 12 }]
    },
    {
        title: '柑橘',
        icon: 'tangerine',
        months: [
            { id: 1, type: '年柑' },
            { id: 2, type: '年柑' },
            { id: 11, type: '桶柑' },
            { id: 12, type: '桶柑' }
        ]
    },
    {
        title: '蜜棗',
        icon: 'jujube',
        months: [{ id: 1 }, { id: 2 }, { id: 12 }]
    },
    {
        title: '柳丁',
        icon: 'oranges',
        months: [{ id: 1 }, { id: 2 }, { id: 12 }]
    },
    {
        title: '金棗',
        icon: 'date',
        months: [{ id: 1 }, { id: 2 }, { id: 12 }]
    },
    {
        title: '草莓',
        icon: 'strawberry',
        months: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 12 }]
    },
    {
        title: '番茄',
        icon: 'tomato',
        months: [
            { id: 1, type: '牛番茄' },
            { id: 2, type: '聖女' },
            { id: 3, type: '玉女' },
            { id: 4, type: '黑柿' },
            { id: 12, type: '桃太郎' }
        ]
    },
    {
        title: '芭樂',
        icon: 'ballet',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '木瓜',
        icon: 'papaya',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '鳳梨',
        icon: 'pineapple',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '金桔',
        icon: 'kumquat',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '檸檬',
        icon: 'lemon',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    },
    {
        title: '黃金果',
        icon: 'caimito',
        months: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 }
        ]
    }
]

const FruitCalendar = ({ className = '' }) => {
    const isLayoutXL = useMedia('(min-width: 1024px)')

    return (
        <div
            className={`max-w-[1024px] mx-auto md:px-[24px] px-[16px] lg:px-[0] ${className}`}
        >
            <table className="w-100 border-collapse:collapse">
                <thead>
                    <tr>
                        <th className="fz-14px fz-xl-18px lg:w-[160px] md:w-[120px] w-[100px] lg:py-[8px] py-4px border border-[#FBCE4C] bg-[#FFF6DE]">
                            <I18N>當季</I18N>
                        </th>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <th
                                key={i}
                                className="fz-14px fz-xl-18px lg:w-[72px] md:w-[42px] w-[22px] border border-[#FBCE4C] bg-[#FFF6DE] text-center"
                            >
                                <I18N>
                                    {i + 1}
                                    {isLayoutXL ? '月' : ''}
                                </I18N>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {fruitCalender.map((fruit, j) => (
                        <tr
                            key={j}
                            className={`${
                                j % 2 === 0 ? '' : 'bg-[#F0F0F0]'
                            } hover:bg-[#FFF6DE]`}
                        >
                            <td className="fz-14px fz-lg-16px py-[6px] lg:py-[8px] px-2 border border-[#F0F0F0] flex items-center justify-end">
                                <I18N>{fruit.title}</I18N>
                                <i
                                    className="lg:block hidden ml-4px w-[28px] h-[28px]"
                                    aria-hidden="true"
                                    style={{
                                        backgroundImage: `url(/images/icon-fruit/${fruit.icon}.png)`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                ></i>
                            </td>
                            {Array.from({ length: 12 }).map((_, monthIndex) => {
                                const monthData = fruit.months.find(
                                    (month) => month.id === monthIndex + 1
                                )
                                return (
                                    <td
                                        key={monthIndex}
                                        className={`lg:text-[0.8125rem] lg:leading-[1.5rem] text-[0.6rem] border border-[#F0F0F0] text-center align-middle`}
                                    >
                                        <div
                                            className={`${
                                                monthData
                                                    ? 'bg-[#FBCE4C] outline outline-1 outline-[#FBCE4C] lg:min-h-[1.5rem] min-h-[0.85rem]'
                                                    : ''
                                            }`}
                                        >
                                            {isLayoutXL && (
                                                <I18N>
                                                    {monthData
                                                        ? monthData.type
                                                        : ''}
                                                </I18N>
                                            )}
                                        </div>
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(FruitCalendar)
