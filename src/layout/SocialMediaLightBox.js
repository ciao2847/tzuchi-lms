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
                socialMediasData.isShow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } flex justify-center items-center w-full h-full fixed inset-0 z-50 bg-black/50 transition-all duration-300`}
        >
            <SocialMediaDetail
                data={detailData}
                allData={socialMediasData.data}
            />

            <div
                className="absolute inset-0 -z-10 w-full h-full"
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
