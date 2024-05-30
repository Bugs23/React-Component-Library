import "./card.scss"

export default function Card({children, ...props}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}