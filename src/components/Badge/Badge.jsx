import "./Badge.scss"

export default function Badge({children, color="gray", shape="square"}) {
    return (
        <span className={`badge ${color} ${shape}`}>
            {children}
        </span>
    )
}