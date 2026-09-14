import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import I18N from 'components/I18N'
import { useMedia } from 'hooks'

const StickyNav = ({ data, className }) => {
    const isLayoutXL = useMedia('(min-width: 1200px)')
    const location = useLocation()
    const scrollRef = useRef(null)
    const sensorRef = useRef(null)
    const [currentId, setCurrentId] = useState(0)
    const [isSticky, toggleSticky] = useState(false)

    useEffect(() => {
        if (sensorRef.current) {
            const observer = new IntersectionObserver((entries, observer) => {
                toggleSticky(!entries[0].isIntersecting)
            })
            observer.observe(sensorRef.current)
            return () => {
                observer.disconnect()
            }
        }
    }, [isSticky])
    useEffect(() => {
        const observerOptions = {
            rootMargin: '0px 0px -75% 0px'
        }

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id.replace('scroll-anchor-', '') * 1
                    setCurrentId(id)
                } else {
                    // setCurrentId(0)
                }
            })
        }

        const navObserver = new IntersectionObserver(
            observerCallback,
            observerOptions
        )
        //setTimeout(() => {
        document.querySelectorAll('[id*="scroll-anchor"]').forEach((sec) => {
            navObserver.observe(sec)
        })
        //}, 1500)
    }, [data])

    useEffect(() => {
        if (isLayoutXL) return
        scrollRef.current.scrollLeft =
            document
                .querySelector(`#btn-scroll-${currentId}`)
                .getBoundingClientRect().left +
            scrollRef.current.scrollLeft -
            16
    }, [currentId])
    useEffect(() => {
        setCurrentId(0)
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 0
        }
    }, [location])

    return (
        <nav
            className={`sticky-nav sticky z-[200] ${
                isSticky ? 'bg-white/50 backdrop-blur ' : ''
            } ${className || ''}`}
        >
            <div
                className="z-[2000] w-0 h-0 -mt-[58px] xl:-mt-[82px] absolute top-0 left-0 pointer-events-none"
                ref={sensorRef}
            ></div>
            <ul
                className={`scroll-x-blk flex justify-start content-center mx-auto px-1`}
                ref={scrollRef}
            >
                {data.map((item) => (
                    <li
                        key={item.id}
                        className="shrink-0 text-[15px] md:text-[16px] mr-2 last:mr-0"
                    >
                        <button
                            className={`py-1 px-2 xl:px-3 text-[20px] xl:text-[24px] btn-minecraft text-[#53170E] cursor-pointer font-bold ${
                                currentId === item.id
                                    ? 'text-secondary'
                                    : 'hover:text-secondary '
                            }`}
                            onClick={() => {
                                document
                                    .querySelector(`#scroll-anchor-${item.id}`)
                                    ?.scrollIntoView(
                                        isLayoutXL
                                            ? {
                                                  behavior: 'smooth'
                                              }
                                            : null
                                    )
                            }}
                            id={`btn-scroll-${item.id}`}
                        >
                            <I18N>{item.title}</I18N>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default React.memo(StickyNav)
