import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { closeDetail } from 'store/social-media/socialMediasSlice'
import SocialMediaDetail from 'components/SocialMediaDetail'

const SocialMediaLightBox = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const socialMediasData = useSelector(
        (state) => state.socialMediasData,
        shallowEqual
    )
    const detailData = socialMediasData?.data?.find(
        (media) => media.id === socialMediasData.index
    )
    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            const charCode = e.which ? e.which : e.keyCode
            if (charCode === 27) {
                dispatch(closeDetail())
                if (location.href.includes('social-media')) {
                    window.noScrollReset = true
                    navigate('/zh-tw/social-medias')
                }
            }
        })
    }, [])
    useEffect(() => {
        if (!socialMediasData) return
        if (socialMediasData.isShow) {
            document.querySelector('#social-media-link')?.focus()
        } else {
            window.currentFocusTarget?.focus()
        }
    }, [socialMediasData])
    if (!detailData) {
        return null
    }

    return (
        <div
            className={`${
                socialMediasData.isShow ? '' : 'op-0 pointer-events-none'
            } d-flex justify-content-center align-items-center w-100 h-100 fixed-top bg-black-50 trs-all`}
        >
            <SocialMediaDetail
                data={detailData}
                allData={socialMediasData.data}
            />

            <div
                className="fill-parent"
                onClick={() => {
                    dispatch(closeDetail())
                    if (location.href.includes('social-media')) {
                        window.noScrollReset = true
                        navigate('/zh-tw/social-medias')
                    }
                }}
            ></div>
        </div>
    )
}

export default React.memo(SocialMediaLightBox)
