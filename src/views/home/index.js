import React, { useContext } from 'react'
import { LoginContext } from 'contexts/LoginProvider'
import EntranceSection from './EntranceSection'
import LoginSection from './LoginSection'
import LearningSummarySection from './LearningSummarySection'
import AnnouncementSection from './AnnouncementSection'
import FeaturedVideoSection from './FeaturedVideoSection'
import CategoryVideoSection from './CategoryVideoSection'

const Page = () => {
    const { isLogin, login, user } = useContext(LoginContext)

    return (
        <div className="bg-light pt-[34px] xl:pt-[58px] mt-6">
            <section className="relative isolate flex items-center justify-center bg-light px-4 py-10 md:px-6 xl:min-h-[calc(100dvh-80px)] xl:px-10 ">
                <img
                    src={`${process.env.BASE_PATH}/images/index/login-bg-deco.png`}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full object-cover object-bottom md:h-auto"
                    alt=""
                    aria-hidden="true"
                />
                <div className="relative z-[1] mx-auto grid w-full gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,3fr)] xl:max-w-[1200px] xl:gap-8 2xl:max-w-[1400px]">
                    {isLogin ? (
                        <LearningSummarySection
                            user={user}
                            className="lg:order-2"
                        />
                    ) : (
                        <LoginSection className="lg:order-2" onLogin={login} />
                    )}
                    <AnnouncementSection className="lg:order-1" />
                </div>
            </section>
            <EntranceSection />
            <FeaturedVideoSection />
            <CategoryVideoSection />
        </div>
    )
}

export default React.memo(Page)
