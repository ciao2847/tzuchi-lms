import AutoSwitchLink from 'components/AutoSwitchLink'
import LoadingProvider from 'contexts/LoadingProvider'
import PhotoSwipeProvider from 'contexts/PhotoSwipeProvider'
import React, { Suspense, useEffect } from 'react'
import Spinner from 'components/Spinner'
import ReactGA_4 from 'react-ga4'
import { Navigate, useParams, useSearchParams } from 'react-router-dom'
import BtnBackTop from './BtnBackTop'
import Footer from './Footer'
import Header from './Header'
import LightBox from './LightBox'
import LoadingHint from './LoadingHint'
import ScrollReset from './ScrollReset'

const isProd = process.env.NODE_ENV === 'production' && !process.env.IS_STAGING

const Layout = ({ children }) => {
    const [search] = useSearchParams()
    const isEmbed = search.get('embed') === '1'
    const VALID_LANGUAGES = ['zh-tw', 'en', 'ja', 'ko']
    const { lang = 'zh-tw' } = useParams()
    useEffect(() => {
        if (!isProd) return
        if (process.env.GOOGLE_ANALYTICS_4_KEY) {
            ReactGA_4.initialize(process.env.GOOGLE_ANALYTICS_4_KEY, {
                gaOptions: {
                    cookieFlags: 'secure;samesite=lax'
                }
            })
        }
    }, [])

    if (!VALID_LANGUAGES.includes(lang)) {
        return <Navigate to="/" />
    }

    return (
        <LoadingProvider>
            <PhotoSwipeProvider>
                <div className="flex min-h-[100dvh] flex-col">
                <AutoSwitchLink
                    href="#main-content"
                    className="acc-show-at-focus"
                    title="跳到主要內容區塊"
                    id="btn-main-content"
                >
                    跳到主要內容區塊
                </AutoSwitchLink>
                <span
                    className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden"
                    id="top"
                    aria-hidden="true"
                />
                {!isEmbed && <Header />}
                <main
                    id="main-content"
                    tabIndex="-1"
                    className={`${!isProd ? 'staging-site' : ''} ${
                        isEmbed ? 'pt-2' : 'pt-0'
                    } relative mx-auto flex w-full flex-1 flex-col scroll-mt-[var(--header-height)] focus:outline-none`}
                >
                    <Suspense fallback={<div className="flex flex-1 items-center justify-center pt-[var(--header-height)]"><Spinner block /></div>}>
                        {children}
                    </Suspense>
                </main>
                <Footer />
                <BtnBackTop />
                <LightBox />
                <LoadingHint />
                <ScrollReset />
                </div>
            </PhotoSwipeProvider>
        </LoadingProvider>
    )
}

export default React.memo(Layout)
