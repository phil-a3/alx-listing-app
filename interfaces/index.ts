<<<<<<< HEAD
interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
=======
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
>>>>>>> 340270f32cb35ab19303b1b7167d79f8b566a259
}