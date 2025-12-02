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
    )
}

export default Button