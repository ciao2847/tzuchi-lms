import React, { useState, useEffect, useRef, useContext } from 'react'
import PhotoSwipe from 'photoswipe'
import { PhotoSwipeContext } from 'contexts/PhotoSwipeProvider'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import '../../styles/photoswipe.css'
import '../../styles/default-skin/default-skin.css'

const PhotoSwipeReact = ({ data, index }) => {
    const { setPhotoSwipeData } = useContext(PhotoSwipeContext)
    const elPswpRef = useRef(null)
    const pswpRef = useRef(null)
    const [localData, setLocalData] = useState([])
    useEffect(() => {
        setLocalData(data)
    }, [data])
    useEffect(() => {
        if (!elPswpRef.current || !localData?.length) return

        const elPswp = elPswpRef.current
        const options = {
            bgOpacity: 0.7,
            showHideOpacity: true,
            shareEl: false,
            history: false,
            index: index || 0,
            closeOnScroll: false
        }
        pswpRef.current = new PhotoSwipe(
            elPswp,
            PhotoSwipeUI_Default,
            localData,
            options
        )
        pswpRef.current.listen('close', () => {
            pswpRef.current.close()
            setPhotoSwipeData({
                data: [],
                index: 0,
                visible: false
            })
            if (window.currentFocusTarget) {
                window.currentFocusTarget.focus()
                window.currentFocusTarget = null
            }
        })
        pswpRef.current.init()
    }, [localData])
    return (
        <div
            className="pswp"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            ref={elPswpRef}
        >
            <div className="pswp__bg"></div>
            <div className="pswp__scroll-wrap">
                <div className="pswp__container">
                    <div className="pswp__item"></div>
                    <div className="pswp__item"></div>
                    <div className="pswp__item"></div>
                </div>
                <div className="pswp__ui pswp__ui--hidden">
                    <div className="pswp__top-bar">
                        <div className="pswp__counter"></div>
                        <button
                            className="pswp__button pswp__button--close"
                            title="Close (Esc)"
                        >
                            <span className="sr-only">關閉</span>
                        </button>
                        <button
                            className="pswp__button pswp__button--share"
                            title="Share"
                        >
                            <span className="sr-only">分享</span>
                        </button>
                        <button
                            className="d-none pswp__button pswp__button--fs"
                            title="Toggle fullscreen"
                        >
                            <span className="sr-only">切換全螢幕</span>
                        </button>
                        <button
                            className="pswp__button pswp__button--zoom"
                            title="Zoom in/out"
                        >
                            <span className="sr-only">放大/縮小</span>
                        </button>
                        <button
                            className="d-none pswp__button btn-slideshow pswp__button--slideshow"
                            title="slideshow"
                            id="pswp-btn-slideshow"
                        >
                            <span className="sr-only">幻燈片</span>
                        </button>
                        <div className="pswp__preloader">
                            <div className="pswp__preloader__icn">
                                <div className="pswp__preloader__cut">
                                    <div className="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div className="pswp__share-tooltip"></div>
                    </div>
                    <button
                        className="pswp__button pswp__button--arrow--left"
                        title="Previous (arrow left)"
                    >
                        <span className="sr-only">上一張</span>
                    </button>
                    <button
                        className="pswp__button pswp__button--arrow--right"
                        title="Next (arrow right)"
                    >
                        <span className="sr-only">下一張</span>
                    </button>
                    <div className="pswp__caption">
                        <div className="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PhotoSwipeReact)
