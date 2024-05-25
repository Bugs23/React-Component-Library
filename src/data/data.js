
// BADGE DATA
export const badgeColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink"
]



// BANNER DATA
import { FaCheckCircle } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const bannerTypes = [
    {
        type: "success", 
        title: "Congratulations!", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
        icon: FaCheckCircle
    },
    {
        type: "error", 
        title: "Attention!", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
        icon: BsExclamationTriangleFill
    },
    {
        type: "warning", 
        title: "There is a problem with your application!", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
        icon: BsFillXCircleFill
    },
    {
        type: "neutral", 
        title: "Update available!", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
        icon: BsFillInfoCircleFill
    }
]