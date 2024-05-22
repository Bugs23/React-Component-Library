import "./Badge.scss"

export default function Badge({color, shape}) {
    return (
        <span className={`badge ${color} ${shape}`}>
            {color}
        </span>
    )
}