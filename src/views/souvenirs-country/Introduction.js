import React from 'react'
import I18N from 'components/I18N'
import BlockTitle from 'components/BlockTitle'

const tip = [
    '可以當作伴手禮攜帶出境',
    '經檢疫合格符合輸入國檢疫規定可攜帶出境',
    '不可當作伴手禮攜帶出境'
]

const Introduction = () => {
    return (
        <section
            className="xl:py-10 md:pt-5 md:pb-10 pt-4 pb-8 bg-gradient-to-t from-[#FFF6DE] px-2"
        >
            <BlockTitle title="出境伴手禮" className="mx-auto" />
            <div className="w-full max-w-[900px] mx-auto md:text-[20px] text-[15px] text-center leading-loose mb-5">
                <I18N>如果要將台灣的水果(鮮果)當成伴手禮攜帶至國外，</I18N>
                <br />
                <I18N>依照目的地國家、地區和水果，大致分成3種規定。</I18N>
                <br />
                <I18N>了解目的地國家的規定，多多品嘗台灣的水果。</I18N>
            </div>
            <div className="w-full max-w-[640px] mx-auto bg-white md:rounded-[32px] rounded-[16px] p-3 md:p-6">
                <ul className="list list-inside list-decimal">
                    {tip.map((rule, i) => (
                        <li
                            key={i}
                            className="text-[18px] xl:text-[20px] mb-3 last:mb-0"
                        >
                            {rule}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default React.memo(Introduction)
