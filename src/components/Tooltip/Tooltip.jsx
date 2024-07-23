import "./tooltip.scss"

// Hooks
import useToggle from "../../hooks/useToggle"

export default function Tooltip({children, text="This is a tooltip", color = "gray", position="top"}) {

    const [on, toggle] = useToggle()

    return (
        <span className="tooltip-container">
            {on ? (
                <span className={`tooltip ${color} tooltip-${position}`}>{text} {position}</span>
            ) : null
            }
            <div 
                onMouseEnter={toggle}
                onMouseLeave={toggle}
                className="tooltip-hover-div"
            >
                {children}
            </div>
        </span>
    )
}