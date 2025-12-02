import type { StaticImageData } from "next/image";

export interface CardProps {
    name: string;
    address: string;
    price: string;
    ratings: string;
    discount?: string;
    image?: string | StaticImageData;
}

export interface ButtonProps {
    name: string;
    color: string;
    type: "button" | "submit" | "reset";
    onClick: () => void;
}