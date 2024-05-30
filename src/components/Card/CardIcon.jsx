// Default icon if none is provided - <PiConfettiBold />
import { PiConfettiBold } from "react-icons/pi"

export default function CardIcon({children, ...props}) {

    const iconStyles = {
        backgroundColor: "#3f75fe",
        color: "#fff"
    }

    return (
        <span className="card-icon" style={iconStyles}>
            {!children ? <PiConfettiBold /> : children}
        </span>
    )
}