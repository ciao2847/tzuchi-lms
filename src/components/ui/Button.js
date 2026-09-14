import React from 'react'

const VARIANTS = {
    primary: 'bg-primary text-white hover:bg-primary-light border-transparent',
    secondary: 'bg-secondary text-white hover:opacity-90 border-transparent',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white bg-transparent',
    outlineSecondary: 'border border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent',
    outlineWhite: 'border border-white text-white hover:bg-white hover:text-[#333] bg-transparent',
    white: 'bg-white text-default hover:text-primary border-transparent',
    light: 'bg-light text-default hover:bg-primary hover:text-white border-transparent',
    ghost: 'bg-transparent text-default hover:bg-white border-transparent',
    danger: 'bg-danger text-white hover:opacity-90 border-transparent'
}

const SIZES = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-1.5 text-base',
    lg: 'px-4 py-2 text-lg'
}

const Button = React.forwardRef(
    (
        {
            children,
            variant = 'primary',
            size = 'md',
            className = '',
            disabled = false,
            type = 'button',
            ...props
        },
        ref
    ) => {
        const variantClass = VARIANTS[variant] || VARIANTS.primary
        const sizeClass = SIZES[size] || SIZES.md

        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                className={`inline-flex items-center justify-center rounded transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none ${variantClass} ${sizeClass} ${className}`}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export default React.memo(Button)
