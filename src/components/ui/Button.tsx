import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    href?: string
    onClick?: () => void
    className?: string
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = ''
}: ButtonProps) {
    const baseClass = `btn btn-${variant} ${className}`

    if (href) {
        return (
            <a href={href} className={baseClass} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                {children}
            </a>
        )
    }

    return (
        <button className={baseClass} onClick={onClick}>
            {children}
        </button>
    )
}
