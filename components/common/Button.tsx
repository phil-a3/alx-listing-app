<<<<<<< HEAD
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
=======
"use client";
import { ButtonProps } from "@/interfaces/index"

const Button = ({
    name,
    color,
    type = "button",
    onClick,
}: ButtonProps) => {
    return (
        <button type={type} className="w-fit p-4 rounded-{50%} bg-${color}-500" onClick={onClick}>{name}</button>
>>>>>>> 340270f32cb35ab19303b1b7167d79f8b566a259
    )
}

export default Button