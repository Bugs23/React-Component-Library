// BADGE DATA
export const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink"
]

// ICONS
import { FaCheckCircle } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";

// BANNER TYPES
export const bannerTypes = [
    {
        type: "success", 
        title: "Congratulations!", 
        icon: FaCheckCircle
    },
    {
        type: "error", 
        title: "Attention!", 
        icon: BsExclamationTriangleFill
    },
    {
        type: "warning", 
        title: "There is a problem with your application!", 
        icon: BsFillXCircleFill
    },
    {
        type: "neutral", 
        title: "Update available!", 
        icon: BsFillInfoCircleFill
    }
]