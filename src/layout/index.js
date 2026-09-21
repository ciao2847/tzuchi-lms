import LoadingProvider from 'contexts/LoadingProvider'
import PhotoSwipeProvider from 'contexts/PhotoSwipeProvider'
import React, { useEffect } from 'react'
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
                <a
                    href="#main-content"
                    className="acc-show-at-focus"
                    title="跳到主要內容區塊"
                    id="btn-main-content"
                >
                    跳到主要內容區塊
                </a>
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
                    } relative mx-auto min-h-[80vh] scroll-mt-[56px] focus:outline-none xl:scroll-mt-[80px]`}
                >
                    {children}
                </main>
                <Footer />
                <BtnBackTop />
                <LightBox />
                <LoadingHint />
                <ScrollReset />
            </PhotoSwipeProvider>
        </LoadingProvider>
    )
}

export default React.memo(Layout)
