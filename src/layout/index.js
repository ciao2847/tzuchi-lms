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
                <a
                    className="absolute-top-left text-hide z-2000 pointer-events-none"
                    title="定位點"
                    id="top"
                    tabIndex="-1"
                >
                    定位點
                </a>
                {!isEmbed && <Header />}
                <a
                    className="absolute-top-left text-hide z-2000 pointer-events-none"
                    title="主要內容區塊"
                    id="main-content"
                    tabIndex="-1"
                >
                    主要內容區塊
                </a>
                <main
                    className={`${!isProd ? 'staging-site' : ''} ${
                        isEmbed ? 'pt-2' : 'pt-0'
                    } min-h-[80vh] mx-auto relative`}
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
