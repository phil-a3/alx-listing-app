import React, { ReactNode } from 'react'
interface ButtonProps {
    width?: string;
    height?: string;
    color?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

function Button({
    width = "w-32",
    height = "h-10",
    color = "bg-green-500",
    children = "Click Me",
    onClick,
    className = "",
}) {
    return (
        <button
            onClick={onClick}
            className={`${width} ${height} ${color} text-white rounded-2xl flex items-center justify-center ${className}`}
        >
            {children}
        </button>
    )
}

export default Button