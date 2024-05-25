import "./Badge.scss"

export default function Badge({children, color, shape}) {
    return (
        <span className={`badge ${color} ${shape}`}>
            {children}
        </span>
    )
}