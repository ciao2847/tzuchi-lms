import React, {
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useLayoutEffect,
    useRef,
    useState
} from 'react'
import { createPortal } from 'react-dom'

const MENU_GAP = 4
const VIEWPORT_PADDING = 8
const MAX_MENU_HEIGHT = 256
const OPTION_HEIGHT = 40

const Select = forwardRef(
    (
        {
            children,
            className = '',
            wrapperClassName = '',
            value,
            name,
            onChange,
            disabled = false,
            ...props
        },
        ref
    ) => {
        const triggerRef = useRef(null)
        const menuRef = useRef(null)
        const menuId = useId()
        const [isOpen, setIsOpen] = useState(false)
        const [activeIndex, setActiveIndex] = useState(0)
        const [menuStyle, setMenuStyle] = useState(null)
        const options = React.Children.toArray(children)
            .filter(React.isValidElement)
            .map((option) => ({
                value: String(option.props.value ?? option.props.children),
                label: option.props.children,
                disabled: Boolean(option.props.disabled)
            }))
        const selectedIndex = options.findIndex(
            (option) => option.value === String(value)
        )
        const selectedOption = options[selectedIndex] || options[0]

        const setTriggerRef = useCallback(
            (node) => {
                triggerRef.current = node
                if (typeof ref === 'function') ref(node)
                else if (ref) ref.current = node
            },
            [ref]
        )

        const updatePosition = useCallback(() => {
            const rect = triggerRef.current?.getBoundingClientRect()
            if (!rect) return

            const viewportWidth = window.innerWidth
            const viewportHeight = window.innerHeight
            if (rect.bottom <= 0 || rect.top >= viewportHeight) {
                setIsOpen(false)
                return
            }

            const desiredHeight = Math.min(
                MAX_MENU_HEIGHT,
                options.length * OPTION_HEIGHT + 8
            )
            const spaceBelow = Math.max(
                0,
                viewportHeight - rect.bottom - MENU_GAP - VIEWPORT_PADDING
            )
            const spaceAbove = Math.max(
                0,
                rect.top - MENU_GAP - VIEWPORT_PADDING
            )
            const placeAbove =
                spaceBelow < desiredHeight && spaceAbove > spaceBelow
            const maxHeight = Math.max(
                8,
                Math.min(desiredHeight, placeAbove ? spaceAbove : spaceBelow)
            )
            const width = Math.min(
                rect.width,
                viewportWidth - VIEWPORT_PADDING * 2
            )
            const left = Math.max(
                VIEWPORT_PADDING,
                Math.min(rect.left, viewportWidth - width - VIEWPORT_PADDING)
            )

            setMenuStyle({
                position: 'fixed',
                left,
                width,
                maxHeight,
                ...(placeAbove
                    ? { bottom: viewportHeight - rect.top + MENU_GAP }
                    : { top: rect.bottom + MENU_GAP })
            })
        }, [options.length])

        useEffect(() => {
            if (!isOpen) return undefined

            const isInside = (target) =>
                triggerRef.current?.contains(target) ||
                menuRef.current?.contains(target)
            const closeOutside = ({ target }) => {
                if (!isInside(target)) setIsOpen(false)
            }

            document.addEventListener('pointerdown', closeOutside)
            document.addEventListener('focusin', closeOutside)
            window.addEventListener('resize', updatePosition)
            window.addEventListener('scroll', updatePosition, true)
            window.visualViewport?.addEventListener('resize', updatePosition)
            window.visualViewport?.addEventListener('scroll', updatePosition)

            return () => {
                document.removeEventListener('pointerdown', closeOutside)
                document.removeEventListener('focusin', closeOutside)
                window.removeEventListener('resize', updatePosition)
                window.removeEventListener('scroll', updatePosition, true)
                window.visualViewport?.removeEventListener(
                    'resize',
                    updatePosition
                )
                window.visualViewport?.removeEventListener(
                    'scroll',
                    updatePosition
                )
            }
        }, [isOpen, updatePosition])

        useLayoutEffect(() => {
            if (!isOpen || !menuRef.current) return

            const menu = menuRef.current
            const option = menu.children[activeIndex]
            if (!option) return

            const menuRect = menu.getBoundingClientRect()
            const optionRect = option.getBoundingClientRect()
            if (optionRect.top < menuRect.top) {
                menu.scrollTop -= menuRect.top - optionRect.top
            } else if (optionRect.bottom > menuRect.bottom) {
                menu.scrollTop += optionRect.bottom - menuRect.bottom
            }
        }, [activeIndex, isOpen])

        const openMenu = () => {
            if (disabled || !options.length) return
            setActiveIndex(Math.max(selectedIndex, 0))
            updatePosition()
            setIsOpen(true)
        }

        const selectOption = (index) => {
            const option = options[index]
            if (!option || option.disabled) return

            setIsOpen(false)
            if (option.value !== String(value)) {
                onChange?.({ target: { value: option.value, name } })
            }
            triggerRef.current?.focus()
        }

        const handleKeyDown = (event) => {
            const { key } = event
            if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) {
                event.preventDefault()
                if (!isOpen) {
                    openMenu()
                    return
                }

                if (key === 'Home') setActiveIndex(0)
                else if (key === 'End') setActiveIndex(options.length - 1)
                else {
                    setActiveIndex((current) =>
                        key === 'ArrowDown'
                            ? (current + 1) % options.length
                            : (current - 1 + options.length) % options.length
                    )
                }
            } else if (key === 'Enter' || key === ' ') {
                event.preventDefault()
                if (isOpen) selectOption(activeIndex)
                else openMenu()
            } else if (key === 'Escape' && isOpen) {
                event.preventDefault()
                event.stopPropagation()
                setIsOpen(false)
            } else if (key === 'Tab') {
                setIsOpen(false)
            }
        }

        return (
            <span className={`relative block ${wrapperClassName}`}>
                {name && (
                    <input type="hidden" name={name} value={value ?? ''} />
                )}
                <button
                    {...props}
                    ref={setTriggerRef}
                    type="button"
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    aria-activedescendant={
                        isOpen ? `${menuId}-option-${activeIndex}` : undefined
                    }
                    disabled={disabled}
                    onClick={() => (isOpen ? setIsOpen(false) : openMenu())}
                    onKeyDown={handleKeyDown}
                    className={`flex h-10 w-full min-w-0 cursor-pointer items-center justify-between gap-2 rounded-[6px] border border-solid border-[#d8e1ee] bg-white px-3 text-left text-[14px] text-primary transition-colors hover:border-secondary focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 disabled:cursor-not-allowed disabled:bg-[#f3f7fd] disabled:text-[#8190a2] ${className}`}
                >
                    <span className="min-w-0 flex-1 truncate">
                        {selectedOption?.label}
                    </span>
                    <svg
                        className={`size-4 shrink-0 text-secondary transition-transform ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="m3.5 6 4.5 4.5L12.5 6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                {isOpen &&
                    menuStyle &&
                    createPortal(
                        <ul
                            ref={menuRef}
                            id={menuId}
                            role="listbox"
                            aria-label={props['aria-label']}
                            aria-labelledby={
                                props['aria-label'] ? undefined : props.id
                            }
                            data-select-menu=""
                            style={menuStyle}
                            className="z-[4000] overflow-y-auto overscroll-contain rounded-[6px] border border-solid border-[#d8e1ee] bg-white py-1 text-[14px] text-primary [box-shadow:0_8px_24px_rgba(9,58,123,0.18)]"
                        >
                            {options.map((option, index) => (
                                <li
                                    key={`${option.value}-${index}`}
                                    id={`${menuId}-option-${index}`}
                                    role="option"
                                    aria-selected={
                                        option.value === String(value)
                                    }
                                    aria-disabled={option.disabled || undefined}
                                    onMouseDown={(event) =>
                                        event.preventDefault()
                                    }
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => selectOption(index)}
                                    className={`flex min-h-10 cursor-pointer items-center break-words px-3 py-2 leading-5 ${
                                        index === activeIndex
                                            ? 'bg-[#eaf3ff] text-primary'
                                            : 'hover:bg-[#f3f7fd]'
                                    } ${
                                        option.disabled
                                            ? 'cursor-not-allowed opacity-45'
                                            : ''
                                    }`}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>,
                        document.body
                    )}
            </span>
        )
    }
)

export default React.memo(Select)
