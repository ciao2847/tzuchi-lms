import React from 'react'
import SeasonCard from './SeasonCard'

const CONFIG_LIST = [
    {
        title: '紅龍果',
        month: '盛產期：6-11月',
        taste: '果肉味甜多汁，果香四溢',
        content:
            '紅龍果是仙人掌科的植物，外表宛如一團炙熱的紅色火球而得名。火龍果屬於涼性水果，在自然狀態下，果實於夏秋成熟，果肉味甜多汁，果香四溢，也因為佈滿了黑色的小籽，所以有人稱為芝麻果。'
    },
    {
        title: '百香果',
        month: '盛產期：7-9月',
        taste: '紫紅色外皮、果香酸甜好滋味',
        content:
            '紫紅色外皮、飄來天然的果香、嘗來酸甜滋味，你今年吃百香果了嗎？切開百香果，用小湯匙挖出黃澄澄的汁液，不斷挑動味蕾、口水直流。百香果的原產地在南美洲的巴西，英文名稱是passion fruit，熱情的水果。'
    },
    {
        title: '西瓜',
        month: '盛產期：4-8月',
        taste: '香甜多汁，被稱為「夏季瓜果之王」',
        content:
            '西瓜香甜多汁，消暑解渴，被稱為「夏季瓜果之王」。水分含量佔西瓜整體約94%，不含脂肪和膽固醇，卻具備許多人體所需的營養素。傳統中醫認為西瓜味甘、性寒，助於解暑、止渴、開胃、利尿等。'
    },
    {
        title: '李子',
        month: '盛產期：5-8月',
        taste: '豐富的氨基酸、維生素B12等營養成份',
        content:
            '李子又名「嘉慶子」，對氣候的適應性強、對土壤要求也不嚴格，生長迅速產量高，經濟價值高。用來鮮食外也能做成罐頭、糖漬等加工食品。許多人會把李子加冰糖燉煮，用來潤喉開嗓，而東歐則會用李子釀成李子白蘭地。'
    },
    {
        title: '芒果',
        month: '盛產期：5-9月',
        taste: '富含大量的維生素C，抗氧化及美膚',
        content:
            '「芒果」，中文稱呼來自於英文"Mango"的翻譯，漆樹科，原產於印度。早在明朝，李時珍便將芒果稱為「果中極品」，有止暈、行氣、消食等功效。另外，芒果富含大量的維生素C，也有助於抗氧化及美膚。'
    },
    {
        title: '桃子',
        month: '盛產期：3-4月',
        taste: '果肉酸甜適中，柔軟多汁',
        content:
            '枇杷是春季成熟的水果，果肉酸甜適中且柔軟多汁，除了鮮食之外還可製成加工品如果膏、果露，釀酒等，以及非常知名的枇杷膏。根據《本草綱目》所記載，枇杷能夠袪痰止咳、生津潤肺，清熱健胃。',

        act: true /* 預設的狀態為true */
    }
]

const SeasonList = ({ data, className }) => {
    /* 為react添加className的設定 */
    {
        /*注意 html tag 的語意，這邊應該是一個列表*/
    }
    return (
        <ul
            className={`grid gap-[16px] xl:gap-[24px] pb-[80px] xl:pb-[160px] px-[16px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${className}`}
        >
            {/* className接收外面傳進來的樣式 */}
            {data.map((item, i) => (
                <li className="flex" key={i}>
                    <SeasonCard data={item} />
                </li>
            ))}
        </ul>
    )
}

export default React.memo(SeasonList)
